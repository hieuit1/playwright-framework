import { test, expect } from "../helpers/baseTest";
import { LoginPage } from "../../pages/LoginPage";
import { allure } from "allure-playwright";
import { step } from "../helpers/stepWithScreenshot";
import { invalidLoginCases, validLoginData } from "../../test-data/loginData";

test.describe("Login Feature Tests", () => {
  // Positive case: Đăng nhập thành công
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);

    await allure.epic("Authentication");
    await allure.feature("Login");

    // Thay vì gọi goto trong từng test, ta gom vào beforeEach
    await step(page, "Điều hướng đến trang Đăng nhập", async () => {
      await loginPage.gotoLoginPage();
    });
  });

  // ==================== POSITIVE TEST CASE ====================
  test(
    "Login successfully ",
    {
      tag: [
        "@login",
        "@priority:critical",
        "@smoke",
        "@regression",
        "@positive",
      ],
      annotation: [{ type: "severity", description: "blocker" }],
    },
    async ({ page }) => {
      await allure.story("Valid Login");

      await step(page, "1 Nhập email và password hợp lệ", async () => {
        await loginPage.login(validLoginData.email, validLoginData.password);
      });

      await step(
        page,
        "2 Xác nhận đăng nhập thành công và chuyển hướng về Home",
        async () => {
          // Tùy vào logic thực tế của web, có thể verify URL hoặc UI element (vd: nút Logout)
          await expect(page).toHaveURL(/automationexercise\.com/);
        },
      );
    },
  );

  // ==================== DATA-DRIVEN NEGATIVE TEST CASES ====================
  invalidLoginCases.forEach((data) => {
    test(
      `Login should fail with ${data.scenario}`,
      {
        tag: [
          "@login",
          `@priority:${data.priority}`,
          "@regression",
          "@negative",
        ],
        annotation: [{ type: "severity", description: data.severity }],
      },
      async ({ page }) => {
        await allure.story(`Invalid Login: ${data.scenario.toUpperCase()}`);

        await step(page, `đăng nhập với ${data.scenario}`, async () => {
          await loginPage.login(data.email, data.password);
        });

        await step(page, "Xác nhận hệ thống báo lỗi chính xác", async () => {
          if (data.assertionType === "ui_error") {
            // Trường hợp web trả về dòng chữ màu đỏ báo sai tài khoản
            const errorElement = page.locator(loginPage.errorMessage);
            await expect(errorElement).toBeVisible();
          } else if (data.assertionType === "form_block") {
            // Trường hợp bỏ trống hoặc sai định dạng bị browser chặn lại
            // URL sẽ không thay đổi (vẫn ở trang login)
            await expect(page).toHaveURL(/.*login/);
          }
        });
      },
    );
  });
});
