import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { LoginPage } from "../pages/LoginPage";

test.describe("Checkout Feature Tests", () => {
  // ==================== NEGATIVE TEST CASES ====================

  test("Checkout without login should show Register/Login modal", {
    tag: ['@checkout', '@priority:high'],
    annotation: [{ type: 'severity', description: 'critical' }]
  }, async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);

    await homePage.goto();

    await homePage.addFirstProductToCart();
    await homePage.clickModalViewCart();

    await cartPage.clickProceedToCheckout();

    await cartPage.verifyLoginRegisterModalVisible();
  });

  test("Checkout with empty cart should not be possible", {
    tag: ['@checkout', '@priority:medium'],
    annotation: [{ type: 'severity', description: 'normal' }]
  }, async ({ page }) => {
    const cartPage = new CartPage(page);
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login("automationtesterpro@gmail.com", "123456");

    await cartPage.gotoCart();

    await cartPage.verifyCartIsEmpty();
    await cartPage.verifyProceedToCheckoutNotVisible();
  });
});
