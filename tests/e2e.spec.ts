import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { PaymentPage } from "../pages/PaymentPage";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { checkoutData } from "../test-data/checkoutData";

test.describe("E2E Complete User Journey Tests", () => {
  test("complete journey from search to successful order", async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);
    const loginPage = new LoginPage(page);

    // Search and add multiple products
    await homePage.goto();
    await expect(page).toHaveURL(/automationexercise\.com/);

    await productsPage.gotoProductsPage();
    await productsPage.searchForProduct("Blue Top");
    await expect(page.locator("h2.title.text-center")).toContainText(
      /SEARCHED PRODUCTS/i,
    );

    // Add 3 products to cart
    for (let i = 0; i < 3; i++) {
      await page.locator(".features_items .add-to-cart").nth(i).click();
      if (i < 2) await homePage.clickContinueShopping();
    }

    // Proceed to checkout
    await cartPage.gotoCart();
    await cartPage.verifyCartItemCount(3);
    await cartPage.clickProceedToCheckout();

    // Handle login modal
    if (await page.locator("#checkoutModal").isVisible()) {
      await loginPage.gotoLoginPage();
    }
    await loginPage.login("automationtesterpro@gmail.com", "123456");

    // Complete checkout and payment
    await cartPage.gotoCart();
    await cartPage.clickProceedToCheckout();
    await checkoutPage.verifyCheckoutPageVisible();
    await checkoutPage.enterComment("Please handle with care - fragile items");
    await checkoutPage.clickPlaceOrder();
    await checkoutPage.dismissPopupIfPresent();

    await paymentPage.fillPaymentDetails(checkoutData.validCard);
    await paymentPage.clickPayAndConfirm();
    await paymentPage.verifyOrderSuccess();
  });

  test("multi-product purchase with quantities", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login("automationtesterpro@gmail.com", "123456");

    // Add products
    await homePage.goto();
    const product1 = await homePage.addFirstProductToCart();
    expect(product1).toBeTruthy();
    await homePage.clickModalViewCart();
    await cartPage.verifyProductInCart(product1!);

    await homePage.goto();
    const product2 = await homePage.addProductToCartByIndex(1);
    expect(product2).toBeTruthy();
    await homePage.clickContinueShopping();

    const product3 = await homePage.addProductToCartByIndex(2);
    expect(product3).toBeTruthy();
    await homePage.clickContinueShopping();

    // Complete order
    await cartPage.gotoCart();
    await cartPage.verifyCartItemCount(3);
    await cartPage.clickProceedToCheckout();

    await checkoutPage.verifyCheckoutPageVisible();
    await checkoutPage.enterComment("Standard delivery - ground floor");
    await checkoutPage.clickPlaceOrder();
    await checkoutPage.dismissPopupIfPresent();

    await paymentPage.fillPaymentDetails(checkoutData.validCard);
    await paymentPage.clickPayAndConfirm();
    await paymentPage.verifyOrderSuccess();
  });

  test("failed payment attempt then successful retry", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);

    // Setup
    await loginPage.gotoLoginPage();
    await loginPage.login("automationtesterpro@gmail.com", "123456");

    await homePage.goto();
    const productName = await homePage.addFirstProductToCart();
    expect(productName).toBeTruthy();
    await homePage.clickModalViewCart();

    // Proceed to payment
    await cartPage.clickProceedToCheckout();
    await checkoutPage.verifyCheckoutPageVisible();
    await checkoutPage.clickPlaceOrder();
    await checkoutPage.dismissPopupIfPresent();

    // First attempt - invalid card
    await paymentPage.fillPaymentDetails(checkoutData.shortCardNumber);
    await paymentPage.clickPayAndConfirm();
    await paymentPage.verifyPaymentFailed();

    // Retry with valid card
    await paymentPage.clearCardField("name");
    await paymentPage.clearCardField("cardNumber");
    await paymentPage.clearCardField("cvc");
    await paymentPage.clearCardField("month");
    await paymentPage.clearCardField("year");

    await paymentPage.fillPaymentDetails(checkoutData.validCard);
    await paymentPage.clickPayAndConfirm();
    await paymentPage.verifyOrderSuccess();
  });

  test("search product and login during checkout", async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);
    const loginPage = new LoginPage(page);

    // Search and add product
    await productsPage.gotoProductsPage();
    await productsPage.searchForProduct("Dress");

    const addBtn = page.locator(".features_items .add-to-cart").first();
    await addBtn.click();

    const productName = await page
      .locator(".features_items .productinfo p")
      .first()
      .textContent();

    const viewCartBtn = page.locator("#cartModal a[href='/view_cart']").first();
    await viewCartBtn.waitFor({ state: "visible" });
    await viewCartBtn.click();

    // Verify in cart
    await cartPage.verifyProductInCart(productName!);

    // Login during checkout
    await cartPage.clickProceedToCheckout();
    await cartPage.verifyLoginRegisterModalVisible();

    await loginPage.gotoLoginPage();
    await loginPage.login("automationtesterpro@gmail.com", "123456");

    // Complete checkout
    await cartPage.gotoCart();
    await cartPage.clickProceedToCheckout();

    await checkoutPage.verifyCheckoutPageVisible();
    await checkoutPage.clickPlaceOrder();
    await checkoutPage.dismissPopupIfPresent();

    await paymentPage.fillPaymentDetails(checkoutData.validCard);
    await paymentPage.clickPayAndConfirm();
    await paymentPage.verifyOrderSuccess();
  });
});
