import { test as baseTest } from "@playwright/test";

export const test = baseTest.extend({
  page: async ({ page }, use) => {
    // ==========================================
    // LỚP KHIÊN 1: Chặn tải quảng cáo từ Network (Nâng cấp từ khóa)
    // ==========================================
    await page.route("**/*", (route) => {
      const url = route.request().url();
      const blockedKeywords = [
        "googleads",
        "googlesyndication",
        "doubleclick",
        "adservice",
        "vignette", // Từ khóa chuyên trị cái popup che màn hình
        "adsbygoogle",
      ];

      if (blockedKeywords.some((keyword) => url.includes(keyword))) {
        route.abort();
      } else {
        route.continue();
      }
    });

    // ==========================================
    // LỚP KHIÊN 2: Tiêm CSS ẩn quảng cáo (Tuyệt chiêu cuối)
    // ==========================================
    // Lệnh này sẽ chạy ngầm ngay khi web vừa mở ra, ép tất cả các
    // thẻ iframe quảng cáo của Google phải "tàng hình" (display: none)
    await page.addInitScript(() => {
      const style = document.createElement("style");
      style.innerHTML = `
                /* Ẩn các iframe bắt đầu bằng chữ aswift hoặc ad_ (chuẩn của Google Ads) */
                iframe[name^="aswift"], 
                iframe[id^="ad_"], 
                .adsbygoogle, 
                div[id^="google_vignette"] { 
                    display: none !important; 
                    width: 0 !important; 
                    height: 0 !important; 
                }
            `;
      document.documentElement.appendChild(style);
    });

    // Trả page về cho test case sử dụng
    await use(page);
  },
});

export { expect } from "@playwright/test";
