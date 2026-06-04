import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  timeout: 60000,

  // Thời gian tối đa chờ một hàm expect() (ví dụ: expect(locator).toBeVisible())
  expect: {
    timeout: 5000,
  },

  retries: 0,

  use: {
    // Thời gian tối đa cho các hành động (click, fill, hover...)
    actionTimeout: 10000,

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
