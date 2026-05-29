import { test as baseTest } from "@playwright/test";

// Mở rộng (extend) test mặc định của Playwright
export const test = baseTest.extend({
  // Cấu hình lại object 'page'
  page: async ({ page }, use) => {
    // --- ĐOẠN CHẶN QUẢNG CÁO NẰM Ở ĐÂY ---
    await page.route("**/*", (route) => {
      const url = route.request().url();
      // Nếu phát hiện link quảng cáo thì chặn đứng (abort)
      if (
        url.includes("googleads") ||
        url.includes("googlesyndication") ||
        url.includes("doubleclick") ||
        url.includes("adservice")
      ) {
        route.abort();
      } else {
        route.continue(); // Các link khác tải bình thường
      }
    });

    // Trả object 'page' (đã được trang bị khiên chặn quảng cáo) cho các test case dùng
    await use(page);
  },
});

// Export luôn expect để file test kia chỉ cần import từ file này
export { expect } from "@playwright/test";
