import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { LoginPage } from "../pages/LoginPage";
import { allure } from "allure-playwright";
import { step } from "./helpers/stepWithScreenshot";

test.describe("Checkout Feature Tests", () => {
  // ==================== NEGATIVE TEST CASES ====================

  test(
    "Checkout without login should show Register/Login modal",
    {
      tag: ["@checkout", "@priority:high"],
      annotation: [{ type: "severity", description: "critical" }],
    },
    async ({ page }) => {
      const homePage = new HomePage(page);
      const cartPage = new CartPage(page);

      await allure.epic("E-commerce");
      await allure.feature("Checkout");
      await allure.story("Checkout Without Login");

      await step(page, "1. Đi tới trang chủ", async () => {
        await homePage.goto();
      });

      await step(page, "2. Thêm sản phẩm đầu tiên vào giỏ hàng", async () => {
        await homePage.addFirstProductToCart();
      });

      await step(page, "3. Chuyển tới xem giỏ hàng qua Modal", async () => {
        await homePage.clickModalViewCart();
      });

      await step(page, "4. Click Proceed To Checkout", async () => {
        await cartPage.clickProceedToCheckout();
      });

      await step(
        page,
        "5. Xác nhận Modal Đăng nhập/Đăng ký xuất hiện",
        async () => {
          await cartPage.verifyLoginRegisterModalVisible();
        },
      );
    },
  );

  test(
    "Checkout with empty cart should not be possible",
    {
      tag: ["@checkout", "@priority:medium"],
      annotation: [{ type: "severity", description: "normal" }],
    },
    async ({ page }) => {
      const cartPage = new CartPage(page);
      const loginPage = new LoginPage(page);

      await allure.epic("E-commerce");
      await allure.feature("Checkout");
      await allure.story("Checkout With Empty Cart");

      await step(
        page,
        "1. Đi tới trang Đăng nhập và đăng nhập thành công",
        async () => {
          await loginPage.gotoLoginPage();
          await loginPage.login("automationtesterpro@gmail.com", "123456");
        },
      );

      await step(page, "2. Chuyển tới trang giỏ hàng", async () => {
        await cartPage.gotoCart();
      });

      await step(page, "3. Xác nhận giỏ hàng trống", async () => {
        await cartPage.verifyCartIsEmpty();
      });

      await step(
        page,
        "4. Xác nhận nút Proceed To Checkout không hiển thị",
        async () => {
          await cartPage.verifyProceedToCheckoutNotVisible();
        },
      );
    },
  );
});
