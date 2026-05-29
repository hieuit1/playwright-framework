import { test, expect } from "@playwright/test";
import { ProductsPage } from "../../pages/ProductsPage";
import { allure } from "allure-playwright";
import { step } from "../helpers/stepWithScreenshot";

test.describe("Search Product Feature Tests", () => {
  test.beforeEach(async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.gotoProductsPage();
  });

  test(
    "Search for an existing product successfully",
    {
      tag: ["@search", "@priority:high"],
      annotation: [{ type: "severity", description: "critical" }],
    },
    async ({ page }) => {
      const productsPage = new ProductsPage(page);
      const searchKeyword = "Blue Top";

      await allure.epic("E-commerce");
      await allure.feature("Search");
      await allure.story("Search Existing Product");

      await step(page, "1. Nhập từ khóa tìm kiếm", async () => {
        await productsPage.searchForProduct(searchKeyword);
      });

      await step(
        page,
        '2. Xác nhận tiêu đề "SEARCHED PRODUCTS" hiển thị',
        async () => {
          const titleLocator = page
            .locator(productsPage.searchedProductsTitle)
            .filter({ hasText: /SEARCHED PRODUCTS/i });
          await expect(titleLocator).toBeVisible();
        },
      );

      await step(page, "3. Xác nhận có sản phẩm được tìm thấy", async () => {
        const productNamesLocator = page.locator(productsPage.productNames);
        await expect(productNamesLocator).not.toHaveCount(0);
      });

      await step(
        page,
        "4. Xác nhận sản phẩm đầu tiên chứa từ khóa tìm kiếm",
        async () => {
          const productNamesLocator = page.locator(productsPage.productNames);
          const firstProductName = await productNamesLocator
            .first()
            .textContent();
          expect(firstProductName?.toLowerCase()).toContain("blue");
        },
      );
    },
  );

  test(
    "Search for a non-existing product",
    {
      tag: ["@search", "@priority:medium"],
      annotation: [{ type: "severity", description: "normal" }],
    },
    async ({ page }) => {
      const productsPage = new ProductsPage(page);
      const invalidKeyword = "InvalidProductXYZ123";

      await allure.epic("E-commerce");
      await allure.feature("Search");
      await allure.story("Search Non-Existing Product");

      await step(page, "1. Nhập từ khóa không tồn tại", async () => {
        await productsPage.searchForProduct(invalidKeyword);
      });

      await step(
        page,
        '2. Xác nhận tiêu đề "SEARCHED PRODUCTS" hiển thị',
        async () => {
          const titleLocator = page
            .locator(productsPage.searchedProductsTitle)
            .filter({ hasText: /SEARCHED PRODUCTS/i });
          await expect(titleLocator).toBeVisible();
        },
      );

      await step(
        page,
        "3. Xác nhận không có sản phẩm nào được tìm thấy",
        async () => {
          const productNamesLocator = page.locator(productsPage.productNames);
          await expect(productNamesLocator).toHaveCount(0);
        },
      );
    },
  );

  test(
    "Search with empty keyword",
    {
      tag: ["@search", "@priority:low"],
      annotation: [{ type: "severity", description: "minor" }],
    },
    async ({ page }) => {
      const productsPage = new ProductsPage(page);

      await allure.epic("E-commerce");
      await allure.feature("Search");
      await allure.story("Search With Empty Keyword");

      await step(page, "1. Tìm kiếm với từ khóa rỗng", async () => {
        await productsPage.searchForProduct("");
      });

      await step(page, "2. Xác nhận hiển thị tất cả sản phẩm", async () => {
        const productNamesLocator = page.locator(productsPage.productNames);
        await expect(productNamesLocator).not.toHaveCount(0);
      });
    },
  );
});
