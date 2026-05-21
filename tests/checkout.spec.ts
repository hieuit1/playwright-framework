import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { PaymentPage } from '../pages/PaymentPage';
import { LoginPage } from '../pages/LoginPage';
import { checkoutData } from '../test-data/checkoutData';

test.describe('Checkout Feature Tests', () => {

    // ==================== NEGATIVE TEST CASES ====================

    test('Checkout without login should show Register/Login modal', async ({ page }) => {
        const homePage = new HomePage(page);
        const cartPage = new CartPage(page);

        // Bước 1: Vào trang Home (không đăng nhập)
        await homePage.goto();

        // Bước 2: Thêm sản phẩm đầu tiên vào giỏ hàng
        await homePage.addFirstProductToCart();
        await homePage.clickModalViewCart();

        // Bước 3: Click "Proceed To Checkout"
        await cartPage.clickProceedToCheckout();

        // Bước 4: Kiểm tra modal yêu cầu Register/Login hiển thị
        await cartPage.verifyLoginRegisterModalVisible();
    });

    test('Checkout with empty cart should not be possible', async ({ page }) => {
        const cartPage = new CartPage(page);
        const loginPage = new LoginPage(page);

        // Bước 1: Đăng nhập
        await loginPage.gotoLoginPage();
        await loginPage.login('automationtesterpro@gmail.com', '123456');

        // Bước 2: Truy cập trực tiếp trang Cart (không thêm sản phẩm)
        await cartPage.gotoCart();

        // Bước 3: Kiểm tra giỏ hàng rỗng và nút Proceed To Checkout không hiển thị
        await cartPage.verifyCartIsEmpty();
        await cartPage.verifyProceedToCheckoutNotVisible();
    });

    // ==================== POSITIVE TEST CASES ====================

    test('Complete checkout flow should succeed', async ({ page }) => {
        const homePage = new HomePage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const paymentPage = new PaymentPage(page);
        const loginPage = new LoginPage(page);

        // Bước 1: Đăng nhập
        await loginPage.gotoLoginPage();
        await loginPage.login('automationtesterpro@gmail.com', '123456');

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

        // Bước 7: Điền thông tin thanh toán
        await paymentPage.fillPaymentDetails(checkoutData.validCard);

        // Bước 8: Click Pay and Confirm Order
        await paymentPage.clickPayAndConfirm();

        // Bước 9: Kiểm tra đặt hàng thành công
        await paymentPage.verifyOrderSuccess();
    });

    test('Checkout with comment should succeed', async ({ page }) => {
        const homePage = new HomePage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const paymentPage = new PaymentPage(page);
        const loginPage = new LoginPage(page);

        // Bước 1: Đăng nhập
        await loginPage.gotoLoginPage();
        await loginPage.login('automationtesterpro@gmail.com', '123456');

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

        // Bước 6: Điền thông tin thanh toán và xác nhận
        await paymentPage.fillPaymentDetails(checkoutData.validCard);
        await paymentPage.clickPayAndConfirm();

        // Bước 7: Kiểm tra đặt hàng thành công
        await paymentPage.verifyOrderSuccess();
    });

    test('Checkout and download invoice should succeed', async ({ page }) => {
        const homePage = new HomePage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const paymentPage = new PaymentPage(page);
        const loginPage = new LoginPage(page);

        // Bước 1: Đăng nhập
        await loginPage.gotoLoginPage();
        await loginPage.login('automationtesterpro@gmail.com', '123456');

        // Bước 2: Thêm sản phẩm vào giỏ hàng
        await homePage.goto();
        await homePage.addFirstProductToCart();
        await homePage.clickModalViewCart();

        // Bước 3: Checkout flow
        await cartPage.clickProceedToCheckout();
        await checkoutPage.verifyCheckoutPageVisible();
        await checkoutPage.clickPlaceOrder();

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
