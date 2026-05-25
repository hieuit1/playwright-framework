import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { PaymentPage } from "../pages/PaymentPage";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { checkoutData } from "../test-data/checkoutData";

test.describe("E2E Complete User Journey Tests", () => {
  test("complete journey from search to successful order", {
    tag: ['@e2e', '@priority:critical'],
    annotation: [{ type: 'severity', description: 'blocker' }]
  }, async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);
    const loginPage = new LoginPage(page);

    await homePage.goto();
    await expect(page).toHaveURL(/automationexercise\.com/);

    await productsPage.gotoProductsPage();
    await productsPage.searchForProduct("Top");
    await expect(page.locator("h2.title.text-center")).toContainText(
      /SEARCHED PRODUCTS/i,
    );

    const addToCartBtns = page.locator(
      ".features_items .single-products .productinfo .add-to-cart",
    );

    for (let i = 0; i < 3; i++) {
      await addToCartBtns.nth(i).click();

      const modal = page.locator("#cartModal");
      await modal.waitFor({ state: "visible" });
      await page.locator("button.btn-success.close-modal").click();
      await modal.waitFor({ state: "hidden" });
    }

    await cartPage.gotoCart();
    await cartPage.verifyCartItemCount(3);
    await cartPage.clickProceedToCheckout();

    const checkoutModal = page.locator("#checkoutModal");
    await checkoutModal.waitFor({ state: "visible" });
    await checkoutModal.locator("a[href='/login']").click();

    await loginPage.login("automationtesterpro@gmail.com", "123456");

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

  test("multi-product purchase with quantities", {
    tag: ['@e2e', '@priority:high'],
    annotation: [{ type: 'severity', description: 'critical' }]
  }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login("automationtesterpro@gmail.com", "123456");

    await homePage.goto();
    const product1 = await homePage.addFirstProductToCart();
    expect(product1).toBeTruthy();
    await homePage.clickModalViewCart();
    await cartPage.verifyProductInCart(product1!);

    await homePage.goto();
    const product2 = await homePage.addProductToCartByIndex(1);
    expect(product2).toBeTruthy();

    await page.locator("button.btn-success.close-modal").click();
    await page.locator("#cartModal").waitFor({ state: "hidden" });

    const product3 = await homePage.addProductToCartByIndex(2);
    expect(product3).toBeTruthy();
    await page.locator("button.btn-success.close-modal").click();

    await cartPage.gotoCart();
    await cartPage.clickProceedToCheckout();

    await checkoutPage.verifyCheckoutPageVisible();
    await checkoutPage.enterComment("Standard delivery - ground floor");
    await checkoutPage.clickPlaceOrder();
    await checkoutPage.dismissPopupIfPresent();

    await paymentPage.fillPaymentDetails(checkoutData.validCard);
    await paymentPage.clickPayAndConfirm();
    await paymentPage.verifyOrderSuccess();
  });

  test("failed payment attempt then successful retry", {
    tag: ['@e2e', '@payment', '@priority:high'],
    annotation: [{ type: 'severity', description: 'critical' }]
  }, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login("automationtesterpro@gmail.com", "123456");

    await homePage.goto();
    const productName = await homePage.addFirstProductToCart();
    expect(productName).toBeTruthy();
    await homePage.clickModalViewCart();

    await cartPage.clickProceedToCheckout();
    await checkoutPage.verifyCheckoutPageVisible();
    await checkoutPage.clickPlaceOrder();
    await checkoutPage.dismissPopupIfPresent();

    await paymentPage.fillPaymentDetails(checkoutData.shortCardNumber);
    await paymentPage.clickPayAndConfirm();
    await paymentPage.verifyPaymentFailed();

    await page.reload();
    await paymentPage.fillPaymentDetails(checkoutData.validCard);
    await paymentPage.clickPayAndConfirm();
    await paymentPage.verifyOrderSuccess();
  });

  test("search product and login during checkout", {
    tag: ['@e2e', '@checkout', '@priority:medium'],
    annotation: [{ type: 'severity', description: 'normal' }]
  }, async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);
    const loginPage = new LoginPage(page);

    await productsPage.gotoProductsPage();
    await productsPage.searchForProduct("Dress");

    const addBtn = page
      .locator(".features_items .single-products .productinfo .add-to-cart")
      .first();
    await addBtn.click();

    const productName = await page
      .locator(".features_items .productinfo p")
      .first()
      .textContent();

    const viewCartBtn = page.locator("#cartModal a[href='/view_cart']").first();
    await viewCartBtn.waitFor({ state: "visible" });
    await viewCartBtn.click();

    await cartPage.verifyProductInCart(productName!);

    await cartPage.clickProceedToCheckout();

    const checkoutModal = page.locator("#checkoutModal");
    await checkoutModal.waitFor({ state: "visible" });
    await checkoutModal.locator("a[href='/login']").click();

    await loginPage.login("automationtesterpro@gmail.com", "123456");

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
