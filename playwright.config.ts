import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  timeout: 60000,

  retries: 1,

  use: {
    baseURL: "https://automationexercise.com",

    headless: process.env.CI ? true : false,

    screenshot: "only-on-failure",

    video: "retain-on-failure",

    trace: "on-first-retry",
  },

  reporter: [
    ["html"],
    ["allure-playwright", { detail: true, outputFolder: "allure-results" }]
  ],
});
