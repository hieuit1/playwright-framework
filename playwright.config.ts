import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  timeout: 60000,

  retries: 0,

  use: {
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
