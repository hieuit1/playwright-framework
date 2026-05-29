import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { CartPage } from "../../pages/CartPage";
import { ProductDetailsPage } from "../../pages/ProductDetailsPage";
import { allure } from "allure-playwright";
import { step } from "../helpers/stepWithScreenshot";
import { cartQuantityCases, cartRemovalCases } from "../../test-data/cartData";

test.describe("Cart Feature Tests", () => {
  let homePage: HomePage;
  let cartPage: CartPage;
  let productDetailsPage: ProductDetailsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    cartPage = new CartPage(page);
    productDetailsPage = new ProductDetailsPage(page);

    await allure.epic("E-commerce");
    await allure.feature("Cart Management");

    await step(page, "Setup: Đi tới trang chủ", async () => {
      await homePage.goto();
    });
  });

  // ==================== DDT: TEST THAY ĐỔI SỐ LƯỢNG ====================
  cartQuantityCases.forEach(({ scenario, quantity, priority, severity }) => {
    test(
      `Update product quantity: ${scenario}`,
      {
        tag: ["@cart", `@priority:${priority}`],
        annotation: [{ type: "severity", description: severity }],
      },
      async ({ page }) => {
        await allure.story(`Cart Item Quantity: ${quantity}`);

        await step(
          page,
          "1. Chọn sản phẩm đầu tiên để xem chi tiết",
          async () => {
            await homePage.clickViewFirstProduct();
          },
        );

        await step(
          page,
          `2. Đặt số lượng thành ${quantity} và thêm vào giỏ`,
          async () => {
            await productDetailsPage.enterQuantity(quantity);
            await productDetailsPage.clickAddToCart();
            await productDetailsPage.clickModalViewCart();
          },
        );

        await step(
          page,
          `3. Kiểm tra cột Số lượng (Quantity) báo đúng ${quantity}`,
          async () => {
            await cartPage.verifyProductQuantity(quantity);
          },
        );
      },
    );
  });

  // ==================== DDT: TEST XÓA SẢN PHẨM ====================
  cartRemovalCases.forEach(
    ({ scenario, expectedCartEmpty, priority, severity }) => {
      test(
        `Remove product from cart: ${scenario}`,
        {
          tag: ["@cart", `@priority:${priority}`],
          annotation: [{ type: "severity", description: severity }],
        },
        async ({ page }) => {
          await allure.story(`Remove Product Flow`);

          await step(page, "1. Thêm sản phẩm bất kỳ vào giỏ hàng", async () => {
            await homePage.addFirstProductToCart();
            await homePage.clickModalViewCart();
          });

          await step(page, "2. Click nút xóa (X) ở dòng sản phẩm", async () => {
            await cartPage.clickRemoveFirstProduct();
          });

          await step(
            page,
            "3. Xác nhận giỏ hàng cập nhật trạng thái trống",
            async () => {
              if (expectedCartEmpty) {
                await cartPage.verifyCartIsEmpty();
              }
            },
          );
        },
      );
    },
  );
});
