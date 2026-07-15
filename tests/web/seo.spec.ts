import { test, expect } from "../helpers/baseTest";
import { allure } from "allure-playwright";
import { step } from "../helpers/stepWithScreenshot";
import { validLoginData } from "../../test-data/loginData";
import { seoTestData } from "../../test-data/seoData";

test.describe("Kiểm tra Tối ưu hóa SEO KHẮT KHE (Strict SEO Audit) - Data Driven @regression @smoke @seo", () => {
  test.beforeEach(async () => {
    await allure.epic("SEO Optimization");
    await allure.feature("Technical SEO & Metadata Compliance");
  });

  for (const data of seoTestData) {
    test(`Strict SEO Audit: ${data.name}`, async ({ page, loginPage, homePage, cartPage, seoPage }) => {
      await allure.story(`Phân tích SEO chuyên sâu: ${data.name}`);

      // Xử lý truy cập trang dựa vào loại cấu hình (yêu cầu đăng nhập hoặc trang công khai)
      if (data.requireAuth) {
        await step(page, "1. Điều kiện tiên quyết: Đăng nhập tài khoản hợp lệ", async () => {
          await loginPage.gotoLoginPage();
          await loginPage.login(validLoginData.email, validLoginData.password);
          await expect(page).toHaveURL(/automationexercise\.com/);
        });

        await step(page, "2. Điều kiện tiên quyết: Thêm sản phẩm vào giỏ hàng", async () => {
          await homePage.addFirstProductToCart();
          await homePage.clickModalViewCart();
          await expect(page).toHaveURL(/.*view_cart/);
        });

        await step(page, `3. Điều hướng tới trang: ${data.name}`, async () => {
          await cartPage.clickProceedToCheckout();
          await expect(page).toHaveURL(new RegExp(data.path));
        });
      } else {
        await step(page, `1. Truy cập trang: ${data.name}`, async () => {
          await page.goto(data.path, { waitUntil: "domcontentloaded" });
        });
      }

      let seoData: any;

      await step(page, "2. Quét toàn bộ dữ liệu Technical SEO", async () => {
        seoData = await seoPage.scanSEOMetadata();
        await seoPage.injectVisualSEOReport(data.name, seoData);
      });

      await step(page, "3. Xác thực Title (50-60 ký tự)", async () => {
        await seoPage.verifyStrictTitle(seoData.titleVal);
      });

      await step(page, "4. Xác thực Meta Description (150-160 ký tự)", async () => {
        await seoPage.verifyStrictMetaDescription(seoData.metaVal);
      });

      await step(page, "5. Xác thực tính duy nhất của thẻ H1", async () => {
        await seoPage.verifyStrictH1(data.name, seoData.h1Texts);
      });

      await step(page, "6. Xác thực Canonical Tag (Chống trùng lặp)", async () => {
        await seoPage.verifyCanonical(seoData.canonical);
      });

      await step(page, "7. Đảm bảo trang Index đúng cấu hình", async () => {
        await seoPage.verifyIndexability(seoData.robots, data.expectIndexable ?? true);
      });

      if (data.checkSocialOg !== false) {
        await step(page, "8. Xác thực Open Graph Tags (Social Share)", async () => {
          await seoPage.verifyOpenGraph(seoData.ogTitle, seoData.ogDesc, seoData.ogImage);
        });
      }

      await step(page, "9. Đảm bảo 100% hình ảnh có thẻ Alt", async () => {
        await seoPage.verifyImagesAltText(seoData.missingAltCount);
      });
    });
  }
});
