import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  timeout: 60000,

  // Giới hạn chạy 50% worker trên CI/máy ảo để tránh lỗi Out of Memory
  workers: process.env.CI ? "50%" : undefined,

  // Thời gian tối đa chờ một hàm expect() (ví dụ: expect(locator).toBeVisible())
  expect: {
    timeout: 5000,
  },

  retries: 0,

  use: {
    // 1. THÊM MỚI: Tắt cờ đánh dấu "Trình duyệt tự động" (Webdriver)
    launchOptions: {
      args: ["--disable-blink-features=AutomationControlled"],
    },

    // 2. THÊM MỚI: Ép Playwright dùng trình duyệt Google Chrome thật thay vì Chromium mặc định
    channel: "chrome",

    // 3. Fake User-Agent (Giữ nguyên của bạn)
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",

    // Thời gian tối đa cho các hành động
    actionTimeout: 15000,

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
