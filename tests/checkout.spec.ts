import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { LoginPage } from "../pages/LoginPage";

test.describe("Checkout Feature Tests", () => {
  // ==================== NEGATIVE TEST CASES ====================

  test("Checkout without login should show Register/Login modal", async ({
    page,
  }) => {
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

  test("Checkout with empty cart should not be possible", async ({ page }) => {
    const cartPage = new CartPage(page);
    const loginPage = new LoginPage(page);

    // Bước 1: Đăng nhập
    await loginPage.gotoLoginPage();
    await loginPage.login("automationtesterpro@gmail.com", "123456");

    // Bước 2: Truy cập trực tiếp trang Cart (không thêm sản phẩm)
    await cartPage.gotoCart();

    // Bước 3: Kiểm tra giỏ hàng rỗng và nút Proceed To Checkout không hiển thị
    await cartPage.verifyCartIsEmpty();
    await cartPage.verifyProceedToCheckoutNotVisible();
  });
});
