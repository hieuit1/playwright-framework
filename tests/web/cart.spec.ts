import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { CartPage } from "../../pages/CartPage";
import { ProductDetailsPage } from "../../pages/ProductDetailsPage";
import { LoginPage } from "../../pages/LoginPage";
import { allure } from "allure-playwright";
import { step } from "../helpers/stepWithScreenshot";

test.describe("Cart Feature Tests", () => {
  test(
    "Add product to cart without login should fail",
    {
      tag: ["@cart", "@priority:high"],
      annotation: [{ type: "severity", description: "critical" }],
    },
    async ({ page }) => {
      const homePage = new HomePage(page);
      const cartPage = new CartPage(page);

      await allure.epic("E-commerce");
      await allure.feature("Cart Management");
      await allure.story("Add to Cart without Login");

      await step(page, "1. Đi tới trang chủ", async () => {
        await homePage.goto();
      });

      await step(page, "2. Thêm sản phẩm đầu tiên vào giỏ hàng", async () => {
        await homePage.addFirstProductToCart();
      });

      await step(page, "3. Chuyển tới xem giỏ hàng qua Modal", async () => {
        await homePage.clickModalViewCart();
      });

      await step(
        page,
        "4. Xác nhận giỏ hàng trống (do chưa đăng nhập)",
        async () => {
          await cartPage.verifyCartIsEmpty();
        },
      );
    },
  );

  test(
    "Add product from details page with custom quantity without login should fail ",
    {
      tag: ["@cart", "@priority:medium"],
      annotation: [{ type: "severity", description: "normal" }],
    },
    async ({ page }) => {
      const homePage = new HomePage(page);
      const productDetailsPage = new ProductDetailsPage(page);
      const cartPage = new CartPage(page);

      await allure.epic("E-commerce");
      await allure.feature("Cart Management");
      await allure.story("Custom Quantity without Login");

      await step(page, "1. Đi tới trang chủ", async () => {
        await homePage.goto();
      });

      await step(
        page,
        "2. Nhấp vào xem chi tiết sản phẩm đầu tiên",
        async () => {
          await homePage.clickFirstViewProduct();
        },
      );

      await step(page, "3. Lấy tên sản phẩm", async () => {
        const productName = await productDetailsPage.getProductName();
        expect(productName).toBeTruthy();
      });

      await step(page, "4. Nhập số lượng tùy chỉnh", async () => {
        const targetQuantity = "1000";
        await productDetailsPage.setQuantity(targetQuantity);
      });

      await step(page, "5. Nhấn Thêm vào giỏ hàng", async () => {
        await productDetailsPage.clickAddToCart();
      });

      await step(page, "6. Chuyển tới xem giỏ hàng qua Modal", async () => {
        await productDetailsPage.clickModalViewCart();
      });

      await step(
        page,
        "7. Xác nhận giỏ hàng trống (do chưa đăng nhập)",
        async () => {
          await cartPage.verifyCartIsEmpty();
        },
      );
    },
  );

  test(
    "Add multiple products to cart after login should succeed",
    {
      tag: ["@cart", "@priority:high"],
      annotation: [{ type: "severity", description: "critical" }],
    },
    async ({ page }) => {
      const homePage = new HomePage(page);
      const cartPage = new CartPage(page);
      const loginPage = new LoginPage(page);

      await allure.epic("E-commerce");
      await allure.feature("Cart Management");
      await allure.story("Add Multiple Products with Login");

      await step(
        page,
        "1. Đi tới trang Đăng nhập và đăng nhập thành công",
        async () => {
          await loginPage.gotoLoginPage();
          await loginPage.login("automationtesterpro@gmail.com", "123456");
        },
      );

      await step(page, "2. Trở lại trang chủ", async () => {
        await homePage.goto();
      });

      const addedProductNames: string[] = [];
      const totalProducts = 4;

      await step(
        page,
        `3. Thêm ${totalProducts} sản phẩm vào giỏ hàng`,
        async () => {
          for (let i = 0; i < totalProducts; i++) {
            const name = await homePage.addProductToCartByIndex(i);
            expect(name).toBeTruthy();
            if (name) addedProductNames.push(name);

            if (i < totalProducts - 1) {
              await homePage.clickContinueShopping();
            } else {
              await homePage.clickModalViewCart();
            }
          }
        },
      );

      await step(
        page,
        "4. Xác nhận tất cả các sản phẩm đã có trong giỏ hàng",
        async () => {
          for (const name of addedProductNames) {
            await cartPage.verifyProductInCart(name);
          }
        },
      );

      await step(
        page,
        "5. Kiểm tra đúng số lượng loại sản phẩm trong giỏ hàng",
        async () => {
          await cartPage.verifyCartItemCount(totalProducts);
        },
      );
    },
  );

  test(
    "Add product from details page with custom quantity after login should succeed",
    {
      tag: ["@cart", "@priority:medium"],
      annotation: [{ type: "severity", description: "normal" }],
    },
    async ({ page }) => {
      const homePage = new HomePage(page);
      const productDetailsPage = new ProductDetailsPage(page);
      const cartPage = new CartPage(page);
      const loginPage = new LoginPage(page);

      await allure.epic("E-commerce");
      await allure.feature("Cart Management");
      await allure.story("Custom Quantity with Login");

      await step(
        page,
        "1. Đi tới trang Đăng nhập và đăng nhập thành công",
        async () => {
          await loginPage.gotoLoginPage();
          await loginPage.login("automationtesterpro@gmail.com", "123456");
        },
      );

      await step(
        page,
        "2. Nhấp vào xem chi tiết sản phẩm đầu tiên",
        async () => {
          await homePage.clickFirstViewProduct();
        },
      );

      let productName = "";
      let targetQuantity = "";

      await step(page, "3. Lấy tên sản phẩm", async () => {
        productName = (await productDetailsPage.getProductName()) || "";
        expect(productName).toBeTruthy();
      });

      await step(page, "4. Nhập số lượng tùy chỉnh", async () => {
        targetQuantity = "1000";
        await productDetailsPage.setQuantity(targetQuantity);
      });

      await step(page, "5. Nhấn Thêm vào giỏ hàng", async () => {
        await productDetailsPage.clickAddToCart();
      });

      await step(page, "6. Chuyển tới xem giỏ hàng qua Modal", async () => {
        await productDetailsPage.clickModalViewCart();
      });

      await step(
        page,
        "7. Xác nhận sản phẩm đã được thêm vào giỏ hàng",
        async () => {
          if (productName) {
            await cartPage.verifyProductInCart(productName);
            await cartPage.verifyProductQuantity(productName, targetQuantity);
          }
        },
      );
    },
  );
});
