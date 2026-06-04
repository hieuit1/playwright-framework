import { test, expect } from "../helpers/baseTest";
import { allure } from "allure-playwright";
import { step } from "../helpers/stepWithScreenshot";

test.describe("Logout Feature Tests", () => {
  test(
    "Logout successfully",
    {
      tag: ["@logout", "@priority:high", "@smoke", "@regression", "@positive"],
      annotation: [{ type: "severity", description: "critical" }],
    },
    async ({ page, loginPage, homePage }) => {

      await allure.epic("Authentication");
      await allure.feature("Logout Flow");
      await allure.story("Valid Logout");

      await step(page, "1. Đi tới trang Đăng nhập", async () => {
        await loginPage.gotoLoginPage();
      });

      await step(page, "2. Đăng nhập thành công", async () => {
        await loginPage.login("automationtesterpro@gmail.com", "123456");
      });

      await step(page, "3. Xác nhận chuyển hướng tới trang chủ", async () => {
        await expect(page).toHaveURL("https://automationexercise.com/");
      });

      await step(page, "4. Click Logout", async () => {
        await homePage.clickLogout();
      });

      await step(
        page,
        "5. Xác nhận chuyển hướng tới trang Đăng nhập",
        async () => {
          await expect(page).toHaveURL(/.*login/);
        },
      );
    },
  );
});
