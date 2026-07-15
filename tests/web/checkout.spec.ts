import { test, expect } from "../helpers/baseTest";
import { allure } from "allure-playwright";
import { step } from "../helpers/stepWithScreenshot";

test.describe("Checkout Feature Tests", () => {
  // ==================== POSITIVE TEST CASES ====================
  test(
    "Logged in user can successfully proceed to checkout page",
    {
      tag: [
        "@checkout",
        "@priority:critical",
        "@regression",
        "@smoke",
        "@positive",
      ],
      annotation: [{ type: "severity", description: "blocker" }],
    },
    async ({ page, loginPage, homePage, cartPage, checkoutPage }) => {
      await allure.epic("E-commerce");
      await allure.feature("Checkout");
      await allure.story("Checkout With Logged In User");

      await step(page, "1. Đăng nhập vào hệ thống", async () => {
        await loginPage.gotoLoginPage();
        await loginPage.login("automationtesterpro@gmail.com", "123456");
      });

      await step(page, "2. Thêm sản phẩm vào giỏ hàng", async () => {
        await homePage.goto();
        await homePage.addFirstProductToCart();
        await homePage.clickModalViewCart();
      });

      await step(page, "3. Click Proceed To Checkout", async () => {
        await cartPage.clickProceedToCheckout();
      });

      await step(
        page,
        "4. Xác nhận trang Checkout hiển thị thành công",
        async () => {
          await checkoutPage.verifyCheckoutPageVisible();
        },
      );

      await step(page, "5. [Teardown] Dọn dẹp giỏ hàng", async () => {
        // Tốt nhất là quay lại giỏ hàng và xóa đi để tránh ảnh hưởng test khác
        await cartPage.gotoCart();

        // Kiểm tra giỏ hàng không trống trước khi xóa
        const emptyCartMsg = page.locator("#empty_cart");
        const isEmpty = await emptyCartMsg.isVisible();

        if (!isEmpty) {
          await cartPage.clickRemoveFirstProduct();
        }
      });
    },
  );

  // ==================== NEGATIVE TEST CASES ====================

  test(
    "Checkout without login should show Register/Login modal",
    {
      tag: [
        "@checkout",
        "@priority:high",
        "@smoke",
        "@regression",
        "@negative",
      ],
      annotation: [{ type: "severity", description: "critical" }],
    },
    async ({ page, homePage, cartPage }) => {
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
      tag: ["@checkout", "@priority:medium", "@regression", "@negative"],
      annotation: [{ type: "severity", description: "normal" }],
    },
    async ({ page, cartPage, loginPage }) => {
      await allure.epic("E-commerce");
      await allure.feature("Checkout");
      await allure.story("Checkout With Empty Cart");

      await step(
        page,
        "1. Truy cập trực tiếp vào trang giỏ hàng với tư cách Guest",
        async () => {
          await cartPage.gotoCart();
        },
      );
      await step(
        page,
        "2. Xác nhận nút Proceed To Checkout không hiển thị",
        async () => {
          await cartPage.verifyCartIsEmpty();
          await cartPage.verifyProceedToCheckoutNotVisible();
        },
      );
    },
  );
});
