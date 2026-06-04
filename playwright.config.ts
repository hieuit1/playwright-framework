import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  timeout: 60000,

  // Giới hạn chạy 1 worker trên CI/máy ảo để tránh lỗi Out of Memory
  workers: process.env.CI ? 1 : undefined,

  // Thời gian tối đa chờ một hàm expect() (ví dụ: expect(locator).toBeVisible())
  expect: {
    timeout: 5000,
  },

  retries: 0,

  use: {
    // Fake User-Agent để vượt qua Cloudflare Bot Protection trên CI
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",

    // THÊM ĐOẠN NÀY: Bổ sung Headers để giả lập giống người dùng thật nhất có thể
    extraHTTPHeaders: {
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9,vi;q=0.8",
      "Upgrade-Insecure-Requests": "1",
      "Sec-Fetch-Dest": "document",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "none",
      "Sec-Fetch-User": "?1",
    },

    actionTimeout: 15000, // Tăng thêm thời gian chờ hành động lên 15 giây (vì mạng CI thường chậm hơn)
    navigationTimeout: 30000, // Thêm thời gian chờ load trang (30 giây)

    baseURL: "https://automationexercise.com",

    headless: process.env.CI ? true : false,

    screenshot: "on",

    video: "on",

    trace: "on-first-retry",
  },

  reporter: [
    ["html"],
    [
      "allure-playwright",
      {
        detail: true,
        outputFolder: "allure-results",
        links: {
          issue: {
            nameTemplate: "Jira #%s",
            urlTemplate: "https://tranxuanhieu899.atlassian.net/browse/%s",
          },
        },
      },
    ],
  ],
});
