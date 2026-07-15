import { test, expect } from "../helpers/baseTest";
import { allure } from "allure-playwright";
import { step } from "../helpers/stepWithScreenshot";
import { validLoginData } from "../../test-data/loginData";
import { performanceTestData } from "../../test-data/performanceData";

test.describe("Performance Optimization Feature Tests", () => {
  test.beforeEach(async () => {
    await allure.epic("Performance Optimization");
    await allure.feature("Web Vitals & Page Load Compliance");
  });

  // Duyệt qua mảng dữ liệu để tạo ra các test cases tự động (Data-driven)
  performanceTestData.forEach((data) => {
    test(
      `Kiểm tra hiệu năng tải trang: ${data.name}`,
      {
        tag: [
          "@performance",
          `@priority:${data.priority}`,
          "@regression",
          "@smoke",
        ],
        annotation: [{ type: "severity", description: data.severity }],
      },
      async ({ page, loginPage, homePage, cartPage, performancePage }) => {
        await allure.story(`Phân tích tốc độ tải trang: ${data.name}`);

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
            await page.goto(data.path, { waitUntil: "load" });
          });
        }

        let metrics: any;

        await step(page, "2. Thu thập chỉ số hiệu năng tải trang", async () => {
          metrics = await performancePage.scanPerformanceMetrics();
          await performancePage.injectVisualPerformanceReport(data.name, metrics, data.thresholds);
        });

        await step(page, "3. Xác thực thời gian phản hồi đầu tiên (TTFB)", async () => {
          await performancePage.verifyTTFB(metrics.ttfb, data.thresholds.ttfb);
        });

        await step(page, "4. Xác thực thời gian hiển thị nội dung đầu tiên (FCP)", async () => {
          await performancePage.verifyFCP(metrics.fcp, data.thresholds.fcp);
        });

        await step(page, "5. Xác thực thời gian tải cấu trúc trang (DOM Content Loaded)", async () => {
          await performancePage.verifyDOMContentLoaded(metrics.domContentLoaded, data.thresholds.domContentLoaded);
        });

        await step(page, "6. Xác thực tổng thời gian tải trang (Window Load Time)", async () => {
          await performancePage.verifyLoadTime(metrics.loadTime, data.thresholds.loadTime);
        });
      }
    );
  });
});
