import { test, expect } from "../helpers/baseTest";
import { allure } from "allure-playwright";
import { step } from "../helpers/stepWithScreenshot";
import { searchTestCases } from "../../test-data/searchData";

test.describe("Search Product Feature Tests - Data Driven", () => {
  test.beforeEach(async ({ page, productsPage }) => {
    await productsPage.gotoProductsPage();
  });

  // Duyệt qua mảng data để tạo ra các test cases tự động
  searchTestCases.forEach((data) => {
    test(
      data.testName,
      {
        tag: [
          "@search",
          `@priority:${data.priority}`,
          "@regression",
          data.hasResults ? "@positive" : "@negative",
        ],
        annotation: [{ type: "severity", description: data.severity }],
      },
      async ({ page, productsPage }) => {
        await allure.epic("E-commerce");
        await allure.feature("Search");
        await allure.story(data.story);

        // Bước 1: Nhập từ khóa
        await step(
          page,
          `1. Nhập từ khóa tìm kiếm: "${data.keyword}"`,
          async () => {
            await productsPage.searchForProduct(data.keyword);
          },
        );

        // Bước 2: Kiểm tra tiêu đề (nếu kịch bản yêu cầu)
        if (data.checkTitle) {
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
        }

        // Bước 3 & 4: Xác minh kết quả trả về
        if (data.hasResults) {
          await step(
            page,
            "3. Xác nhận có sản phẩm được tìm thấy",
            async () => {
              const productNamesLocator = page.locator(
                productsPage.productNames,
              );
              await expect(productNamesLocator).not.toHaveCount(0);
            },
          );

          // Nếu có yêu cầu kiểm tra từ khóa trong tên sản phẩm đầu tiên
          if (data.expectedKeywordInName) {
            await step(
              page,
              `4. Xác nhận sản phẩm đầu tiên chứa từ khóa "${data.expectedKeywordInName}"`,
              async () => {
                const productNamesLocator = page.locator(
                  productsPage.productNames,
                );
                const firstProductName = await productNamesLocator
                  .first()
                  .textContent();
                expect(firstProductName?.toLowerCase()).toContain(
                  data.expectedKeywordInName,
                );
              },
            );
          }
        } else {
          // Xử lý kịch bản không tìm thấy sản phẩm
          await step(
            page,
            "3. Xác nhận không có sản phẩm nào được tìm thấy",
            async () => {
              const productNamesLocator = page.locator(
                productsPage.productNames,
              );
              await expect(productNamesLocator).toHaveCount(0);
            },
          );
        }
      },
    );
  });
});
