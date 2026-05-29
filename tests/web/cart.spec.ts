import { test, expect } from "../helpers/baseTest";
import { HomePage } from "../../pages/HomePage";
import { CartPage } from "../../pages/CartPage";
import { ProductDetailsPage } from "../../pages/ProductDetailsPage";
import { LoginPage } from "../../pages/LoginPage";
import { allure } from "allure-playwright";
import { step } from "../helpers/stepWithScreenshot";
import { validLoginData } from "../../test-data/loginData";

test.describe("Cart Feature Tests - Professional Suite", () => {
  let homePage: HomePage;
  let cartPage: CartPage;
  let productDetailsPage: ProductDetailsPage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    // Khởi tạo các Page Object
    homePage = new HomePage(page);
    cartPage = new CartPage(page);
    productDetailsPage = new ProductDetailsPage(page);
    loginPage = new LoginPage(page);

    await allure.epic("E-commerce");
    await allure.feature("Cart & Checkout Management");
  });

  // =========================================================================
  // TC01: NEGATIVE TEST - Guest không được phép lưu sản phẩm vào giỏ
  // =========================================================================

  // test(
  //   "[Negative] Prevent guest users from adding products to cart",
  //   { tag: ["@cart", "@negative"] },
  //   async ({ page }) => {
  //     await allure.story("Guest Cart Restriction");

  //     await step(
  //       page,
  //       "1. Truy cập trang chủ với tư cách khách (Guest)",
  //       async () => {
  //         await homePage.goto();
  //       },
  //     );

  //     await step(
  //       page,
  //       "2. Cố gắng thêm sản phẩm bất kỳ vào giỏ hàng",
  //       async () => {
  //         await homePage.addFirstProductToCart();
  //         await homePage.clickModalViewCart();
  //       },
  //     );

  //     await step(
  //       page,
  //       "3. Xác minh giỏ hàng trống (Hệ thống chặn Guest lưu giỏ hàng)",
  //       async () => {
  //         // Dựa theo rule của bạn: Chưa login mà thêm được vào giỏ là bug
  //         await cartPage.verifyCartIsEmpty();
  //       },
  //     );
  //   },
  // );

  // =========================================================================
  // TC02: POSITIVE TEST - User đã đăng nhập thêm sản phẩm thành công
  // =========================================================================
  test(
    "[Positive] Authenticated user can add a product to cart",
    { tag: ["@cart", "@positive", "@smoke"] },
    async ({ page }) => {
      await allure.story("Authenticated Cart Usage");

      await step(
        page,
        "1. Tiền điều kiện: Đăng nhập vào hệ thống",
        async () => {
          await loginPage.gotoLoginPage();
          await loginPage.login(validLoginData.email, validLoginData.password);
        },
      );

      await step(
        page,
        "2. Truy cập trang chủ và thêm 1 sản phẩm vào giỏ",
        async () => {
          await homePage.goto();
          await homePage.addFirstProductToCart();
          await homePage.clickModalViewCart();
        },
      );

      await step(
        page,
        "3. Xác minh sản phẩm hiển thị đúng trong giỏ hàng",
        async () => {
          await cartPage.verifyCartItemCount(1);
        },
      );

      await step(
        page,
        "4. [Teardown] Xóa sản phẩm khỏi giỏ để dọn dẹp data",
        async () => {
          // BẮT BUỘC có bước này để test case chạy đi chạy lại không bị fail do tồn data cũ
          await cartPage.clickRemoveFirstProduct();
          await cartPage.verifyCartIsEmpty();
        },
      );
    },
  );

  // =========================================================================
  // TC03: STRESS / BOUNDARY TEST - Thêm số lượng lớn sản phẩm (20 items)
  // =========================================================================
  test(
    "[Boundary] Add a large quantity (20) of a single product",
    { tag: ["@cart", "@stress"] },
    async ({ page }) => {
      await allure.story("Bulk Add to Cart");
      const BULK_QTY = "20"; // Đưa vào biến hằng số thay vì hardcode rải rác

      await step(
        page,
        "1. Tiền điều kiện: Đăng nhập vào hệ thống",
        async () => {
          await loginPage.gotoLoginPage();
          await loginPage.login(validLoginData.email, validLoginData.password);
        },
      );

      await step(
        page,
        "2. Chọn sản phẩm đầu tiên để xem chi tiết (Product Details)",
        async () => {
          await homePage.goto();
          await homePage.clickViewFirstProduct();
        },
      );

      await step(
        page,
        `3. Nhập số lượng ${BULK_QTY} và chọn Add to cart`,
        async () => {
          await productDetailsPage.enterQuantity(BULK_QTY);
          await productDetailsPage.clickAddToCart();
          await productDetailsPage.clickModalViewCart();
        },
      );

      await step(
        page,
        `4. Xác minh giỏ hàng hiển thị chính xác số lượng là ${BULK_QTY}`,
        async () => {
          await cartPage.verifyProductQuantity(BULK_QTY);
        },
      );

      await step(
        page,
        "5. [Teardown] Xóa sản phẩm dọn dẹp giỏ hàng",
        async () => {
          await cartPage.clickRemoveFirstProduct();
          await cartPage.verifyCartIsEmpty();
        },
      );
    },
  );
});
