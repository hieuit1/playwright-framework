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

    await homePage.goto();
    await expect(page).toHaveURL(/automationexercise\.com/);

    // 1. Tìm kiếm bằng từ khoá "Top" để ra nhiều kết quả (chứ không phải Blue Top)
    await productsPage.gotoProductsPage();
    await productsPage.searchForProduct("Top");
    await expect(page.locator("h2.title.text-center")).toContainText(
      /SEARCHED PRODUCTS/i,
    );

    // 2. Lấy chính xác nút Add-to-cart hiển thị (tránh nút bị ẩn trong overlay)
    const addToCartBtns = page.locator(
      ".features_items .single-products .productinfo .add-to-cart",
    );

    // Thêm 3 sản phẩm đầu tiên vào giỏ
    for (let i = 0; i < 3; i++) {
      await addToCartBtns.nth(i).click();

      // Đợi modal báo thêm thành công hiện ra rồi mới bấm Continue Shopping
      const modal = page.locator("#cartModal");
      await modal.waitFor({ state: "visible" });
      await page.locator("button.btn-success.close-modal").click();
      await modal.waitFor({ state: "hidden" }); // RẤT QUAN TRỌNG: Chờ modal đóng hẳn mới chạy vòng lặp tiếp
    }

    // Proceed to checkout
    await cartPage.gotoCart();
    await cartPage.verifyCartItemCount(3);
    await cartPage.clickProceedToCheckout();

    // 3. Xử lý logic Modal báo chưa đăng nhập (Sửa lại đợi Visible)
    const checkoutModal = page.locator("#checkoutModal");
    await checkoutModal.waitFor({ state: "visible" });
    await checkoutModal.locator("a[href='/login']").click(); // Click nút Login ngay trên modal

    // Đăng nhập
    await loginPage.login("automationtesterpro@gmail.com", "123456");

    // Complete checkout and payment
    await cartPage.gotoCart();
    await cartPage.clickProceedToCheckout();

    await checkoutPage.verifyCheckoutPageVisible();
    await checkoutPage.enterComment("Please handle with care - fragile items");
    await checkoutPage.clickPlaceOrder();

    // Lưu ý: Đảm bảo trong hàm này có xử lý chặn Quảng cáo (Ads)
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

    await homePage.goto();
    const product1 = await homePage.addFirstProductToCart();
    expect(product1).toBeTruthy();
    await homePage.clickModalViewCart();
    await cartPage.verifyProductInCart(product1!);

    await homePage.goto();
    const product2 = await homePage.addProductToCartByIndex(1);
    expect(product2).toBeTruthy();

    // Đảm bảo modal đóng hẳn
    await page.locator("button.btn-success.close-modal").click();
    await page.locator("#cartModal").waitFor({ state: "hidden" });

    const product3 = await homePage.addProductToCartByIndex(2);
    expect(product3).toBeTruthy();
    await page.locator("button.btn-success.close-modal").click();

    // Complete order
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

  test("failed payment attempt then successful retry", async ({ page }) => {
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

    // First attempt - invalid card
    await paymentPage.fillPaymentDetails(checkoutData.shortCardNumber);
    await paymentPage.clickPayAndConfirm();
    await paymentPage.verifyPaymentFailed();

    // Retry with valid card (Không cần clear từng field vì trang này có cơ chế load lại)
    await page.reload(); // Cách tốt nhất để reset form payment nếu website không tự clear
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

    await productsPage.gotoProductsPage();
    await productsPage.searchForProduct("Dress");

    // Chỉ định chính xác nút add outside overlay
    const addBtn = page
      .locator(".features_items .single-products .productinfo .add-to-cart")
      .first();
    await addBtn.click();

    const productName = await page
      .locator(".features_items .productinfo p")
      .first()
      .textContent();

    // Sửa locator cho nút View Cart trên Modal
    const viewCartBtn = page.locator("#cartModal a[href='/view_cart']").first();
    await viewCartBtn.waitFor({ state: "visible" });
    await viewCartBtn.click();

    await cartPage.verifyProductInCart(productName!);

    await cartPage.clickProceedToCheckout();

    // Đợi Modal báo lỗi chưa đăng nhập
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
