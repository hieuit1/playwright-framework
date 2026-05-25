import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { PaymentPage } from "../pages/PaymentPage";
import { LoginPage } from "../pages/LoginPage";
import { checkoutData } from "../test-data/checkoutData";

test.describe("Payment Feature Tests", () => {
  // ==================== NEGATIVE TEST CASES ====================

  test("Payment with short card number should fail", {
    tag: ['@payment', '@priority:high'],
    annotation: [{ type: 'severity', description: 'critical' }]
  }, async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);
    const loginPage = new LoginPage(page);

    // Bước 1: Setup - Đăng nhập và tới trang payment
    await loginPage.gotoLoginPage();
    await loginPage.login("automationtesterpro@gmail.com", "123456");
    await homePage.goto();
    await homePage.addFirstProductToCart();
    await homePage.clickModalViewCart();
    await cartPage.clickProceedToCheckout();
    await checkoutPage.verifyCheckoutPageVisible();
    await checkoutPage.clickPlaceOrder();
    await checkoutPage.dismissPopupIfPresent();

    // Bước 2: Điền thông tin thanh toán với card number quá ngắn
    await paymentPage.fillPaymentDetails(checkoutData.shortCardNumber);

    // Bước 3: Click Pay
    await paymentPage.clickPayAndConfirm();

    // Bước 4: Kiểm tra payment thất bại - vẫn ở trang payment
    await paymentPage.verifyPaymentFailed();
  });

  test("Payment with invalid CVC should fail", {
    tag: ['@payment', '@priority:high'],
    annotation: [{ type: 'severity', description: 'critical' }]
  }, async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);
    const loginPage = new LoginPage(page);

    // Bước 1: Setup
    await loginPage.gotoLoginPage();
    await loginPage.login("automationtesterpro@gmail.com", "123456");
    await homePage.goto();
    await homePage.addFirstProductToCart();
    await homePage.clickModalViewCart();
    await cartPage.clickProceedToCheckout();
    await checkoutPage.verifyCheckoutPageVisible();
    await checkoutPage.clickPlaceOrder();
    await checkoutPage.dismissPopupIfPresent();

    // Bước 2: Điền thông tin thanh toán với CVC không hợp lệ (< 3 số)
    await paymentPage.fillPaymentDetails(checkoutData.invalidCVC);

    // Bước 3: Click Pay
    await paymentPage.clickPayAndConfirm();

    // Bước 4: Kiểm tra payment thất bại
    await paymentPage.verifyPaymentFailed();
  });

  test("Payment with expired card should fail", {
    tag: ['@payment', '@priority:high'],
    annotation: [{ type: 'severity', description: 'critical' }]
  }, async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);
    const loginPage = new LoginPage(page);

    // Bước 1: Setup
    await loginPage.gotoLoginPage();
    await loginPage.login("automationtesterpro@gmail.com", "123456");
    await homePage.goto();
    await homePage.addFirstProductToCart();
    await homePage.clickModalViewCart();
    await cartPage.clickProceedToCheckout();
    await checkoutPage.verifyCheckoutPageVisible();
    await checkoutPage.clickPlaceOrder();
    await checkoutPage.dismissPopupIfPresent();

    // Bước 2: Điền thông tin thanh toán với card hết hạn
    await paymentPage.fillPaymentDetails(checkoutData.expiredCard);

    // Bước 3: Click Pay
    await paymentPage.clickPayAndConfirm();

    // Bước 4: Kiểm tra payment thất bại
    await paymentPage.verifyPaymentFailed();
  });

  test("Payment with invalid expiry month should fail", {
    tag: ['@payment', '@priority:medium'],
    annotation: [{ type: 'severity', description: 'normal' }]
  }, async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);
    const loginPage = new LoginPage(page);

    // Bước 1: Setup
    await loginPage.gotoLoginPage();
    await loginPage.login("automationtesterpro@gmail.com", "123456");
    await homePage.goto();
    await homePage.addFirstProductToCart();
    await homePage.clickModalViewCart();
    await cartPage.clickProceedToCheckout();
    await checkoutPage.verifyCheckoutPageVisible();
    await checkoutPage.clickPlaceOrder();
    await checkoutPage.dismissPopupIfPresent();

    // Bước 2: Điền thông tin thanh toán với tháng không hợp lệ (> 12)
    await paymentPage.fillPaymentDetails(checkoutData.invalidExpiryMonth);

    // Bước 3: Click Pay
    await paymentPage.clickPayAndConfirm();

    // Bước 4: Kiểm tra payment thất bại
    await paymentPage.verifyPaymentFailed();
  });

  test("Payment with empty card name should fail", {
    tag: ['@payment', '@priority:medium'],
    annotation: [{ type: 'severity', description: 'normal' }]
  }, async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);
    const loginPage = new LoginPage(page);

    // Bước 1: Setup
    await loginPage.gotoLoginPage();
    await loginPage.login("automationtesterpro@gmail.com", "123456");
    await homePage.goto();
    await homePage.addFirstProductToCart();
    await homePage.clickModalViewCart();
    await cartPage.clickProceedToCheckout();
    await checkoutPage.verifyCheckoutPageVisible();
    await checkoutPage.clickPlaceOrder();
    await checkoutPage.dismissPopupIfPresent();

    // Bước 2: Điền thông tin thanh toán nhưng bỏ trống tên chủ thẻ
    await paymentPage.fillPaymentDetails(checkoutData.validCard);
    await paymentPage.clearCardField("name");

    // Bước 3: Click Pay
    await paymentPage.clickPayAndConfirm();

    // Bước 4: Kiểm tra payment thất bại
    await paymentPage.verifyPaymentFailed();
  });

  test("Payment with empty card number should fail", {
    tag: ['@payment', '@priority:high'],
    annotation: [{ type: 'severity', description: 'critical' }]
  }, async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);
    const loginPage = new LoginPage(page);

    // Bước 1: Setup
    await loginPage.gotoLoginPage();
    await loginPage.login("automationtesterpro@gmail.com", "123456");
    await homePage.goto();
    await homePage.addFirstProductToCart();
    await homePage.clickModalViewCart();
    await cartPage.clickProceedToCheckout();
    await checkoutPage.verifyCheckoutPageVisible();
    await checkoutPage.clickPlaceOrder();
    await checkoutPage.dismissPopupIfPresent();

    // Bước 2: Điền thông tin thanh toán nhưng bỏ trống số thẻ
    await paymentPage.fillPaymentDetails(checkoutData.validCard);
    await paymentPage.clearCardField("cardNumber");

    // Bước 3: Click Pay
    await paymentPage.clickPayAndConfirm();

    // Bước 4: Kiểm tra payment thất bại
    await paymentPage.verifyPaymentFailed();
  });

  test("Payment with empty CVC should fail", {
    tag: ['@payment', '@priority:high'],
    annotation: [{ type: 'severity', description: 'critical' }]
  }, async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);
    const loginPage = new LoginPage(page);

    // Bước 1: Setup
    await loginPage.gotoLoginPage();
    await loginPage.login("automationtesterpro@gmail.com", "123456");
    await homePage.goto();
    await homePage.addFirstProductToCart();
    await homePage.clickModalViewCart();
    await cartPage.clickProceedToCheckout();
    await checkoutPage.verifyCheckoutPageVisible();
    await checkoutPage.clickPlaceOrder();
    await checkoutPage.dismissPopupIfPresent();

    // Bước 2: Điền thông tin thanh toán nhưng bỏ trống CVC
    await paymentPage.fillPaymentDetails(checkoutData.validCard);
    await paymentPage.clearCardField("cvc");

    // Bước 3: Click Pay
    await paymentPage.clickPayAndConfirm();

    // Bước 4: Kiểm tra payment thất bại
    await paymentPage.verifyPaymentFailed();
  });

  // ==================== POSITIVE TEST CASES ====================

  test("Complete checkout flow and payment should succeed", {
    tag: ['@payment', '@priority:critical'],
    annotation: [{ type: 'severity', description: 'blocker' }]
  }, async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);
    const loginPage = new LoginPage(page);

    // Bước 1: Đăng nhập
    await loginPage.gotoLoginPage();
    await loginPage.login("automationtesterpro@gmail.com", "123456");

    // Bước 2: Thêm sản phẩm vào giỏ hàng từ trang Home
    await homePage.goto();
    const productName = await homePage.addFirstProductToCart();
    expect(productName).toBeTruthy();

    // Bước 3: Vào giỏ hàng và kiểm tra sản phẩm
    await homePage.clickModalViewCart();
    if (productName) {
      await cartPage.verifyProductInCart(productName);
    }

    // Bước 4: Click Proceed To Checkout
    await cartPage.clickProceedToCheckout();

    // Bước 5: Kiểm tra trang Checkout hiển thị đầy đủ
    await checkoutPage.verifyCheckoutPageVisible();
    await checkoutPage.verifyOrderReviewVisible();

    // Bước 6: Click Place Order
    await checkoutPage.clickPlaceOrder();
    await checkoutPage.dismissPopupIfPresent();

    // Bước 7: Điền thông tin thanh toán
    await paymentPage.fillPaymentDetails(checkoutData.validCard);

    // Bước 8: Click Pay and Confirm Order
    await paymentPage.clickPayAndConfirm();

    // Bước 9: Kiểm tra đặt hàng thành công
    await paymentPage.verifyOrderSuccess();
  });

  test("Payment with comment should succeed", {
    tag: ['@payment', '@priority:medium'],
    annotation: [{ type: 'severity', description: 'normal' }]
  }, async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);
    const loginPage = new LoginPage(page);

    // Bước 1: Đăng nhập
    await loginPage.gotoLoginPage();
    await loginPage.login("automationtesterpro@gmail.com", "123456");

    // Bước 2: Thêm sản phẩm vào giỏ hàng
    await homePage.goto();
    await homePage.addFirstProductToCart();
    await homePage.clickModalViewCart();

    // Bước 3: Click Proceed To Checkout
    await cartPage.clickProceedToCheckout();

    // Bước 4: Kiểm tra trang Checkout và nhập comment
    await checkoutPage.verifyCheckoutPageVisible();
    await checkoutPage.enterComment(checkoutData.comment);

    // Bước 5: Click Place Order
    await checkoutPage.clickPlaceOrder();
    await checkoutPage.dismissPopupIfPresent();

    // Bước 6: Điền thông tin thanh toán và xác nhận
    await paymentPage.fillPaymentDetails(checkoutData.validCard);
    await paymentPage.clickPayAndConfirm();

    // Bước 7: Kiểm tra đặt hàng thành công
    await paymentPage.verifyOrderSuccess();
  });

  test("Payment and download invoice should succeed", {
    tag: ['@payment', '@priority:medium'],
    annotation: [{ type: 'severity', description: 'normal' }]
  }, async ({ page }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);
    const loginPage = new LoginPage(page);

    // Bước 1: Đăng nhập
    await loginPage.gotoLoginPage();
    await loginPage.login("automationtesterpro@gmail.com", "123456");

    // Bước 2: Thêm sản phẩm vào giỏ hàng
    await homePage.goto();
    await homePage.addFirstProductToCart();
    await homePage.clickModalViewCart();

    // Bước 3: Checkout flow
    await cartPage.clickProceedToCheckout();
    await checkoutPage.verifyCheckoutPageVisible();
    await checkoutPage.clickPlaceOrder();
    await checkoutPage.dismissPopupIfPresent();

    // Bước 4: Thanh toán
    await paymentPage.fillPaymentDetails(checkoutData.validCard);
    await paymentPage.clickPayAndConfirm();

    // Bước 5: Kiểm tra đặt hàng thành công
    await paymentPage.verifyOrderSuccess();

    // Bước 6: Download Invoice và kiểm tra file được tải về
    const download = await paymentPage.clickDownloadInvoice();
    const fileName = download.suggestedFilename();
    expect(fileName).toBeTruthy();

    // Bước 7: Click Continue và kiểm tra quay về trang Home
    await paymentPage.clickContinue();
    await expect(page).toHaveURL(/automationexercise\.com/);
  });
});
