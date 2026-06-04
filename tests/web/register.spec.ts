import { test, expect } from "../helpers/baseTest";
import { allure } from "allure-playwright";
import { step } from "../helpers/stepWithScreenshot";
import {
  invalidRegisterCases,
  validRegisterData,
} from "../../test-data/registerData";

test.describe("Register Feature Tests", () => {
  test.beforeEach(async ({ page, registerPage }) => {
    await allure.epic("Authentication");
    await allure.feature("Register Flow");

    await step(page, "Setup: Đi tới trang Đăng ký/Đăng nhập", async () => {
      await registerPage.gotoRegisterPage();
    });
  });
  // ==================== POSITIVE TEST CASE ====================
  // test(
  //   "Register successfully with valid information",
  //   {
  //     tag: ["@register", "@priority:critical"],
  //     annotation: [{ type: "severity", description: "blocker" }],
  //   },
  //   async ({ page, registerPage, accountInfoPage }) => {
  //     await allure.story("Valid Registration");
  //
  //     const uniqueEmail = validRegisterData.getUniqueEmail();
  //
  //     await step(
  //       page,
  //       `1. Nhập Name và Email hợp lệ: ${uniqueEmail}`,
  //       async () => {
  //         await registerPage.signup(validRegisterData.name, uniqueEmail);
  //       },
  //     );
  //
  //     await step(
  //       page,
  //       "2. Điền thông tin tài khoản chi tiết (Account Info)",
  //       async () => {
  //         // Chuyển sang trang Account Info và điền form
  //         await accountInfoPage.fillAccountInformation();
  //       },
  //     );
  //
  //     await step(page, "3. Click tạo tài khoản", async () => {
  //       await accountInfoPage.clickCreateAccount();
  //     });
  //
  //     await step(
  //       page,
  //       "4. Kiểm tra thông báo tạo tài khoản thành công",
  //       async () => {
  //         // Có thể đưa locator này vào AccountInfoPage trong tương lai cho code sạch hơn
  //         await expect(
  //           page.locator('[data-qa="account-created"]'),
  //         ).toContainText("Account Created!");
  //       },
  //     );
  //   },
  // );

  // ==================== DATA-DRIVEN NEGATIVE TEST CASES ====================
  invalidRegisterCases.forEach((data) => {
    test(
      `Register should fail with ${data.scenario}`,
      {
        tag: [
          "@register",
          `@priority:${data.priority}`,
          "@regression",
          "@negative",
        ],
        annotation: [{ type: "severity", description: data.severity }],
      },
      async ({ page, registerPage }) => {
        await allure.story(`Invalid Register: ${data.scenario.toUpperCase()}`);

        await step(
          page,
          `1. Cố gắng đăng ký với: ${data.scenario}`,
          async () => {
            await registerPage.signup(data.name, data.email);
          },
        );

        await step(
          page,
          "2. Xác nhận hệ thống báo lỗi/chặn đăng ký chính xác",
          async () => {
            if (data.assertionType === "ui_error") {
              // Tận dụng biến existingEmailMessage đã khai báo sẵn trong RegisterPage.ts
              const errorElement = page.locator(
                registerPage.existingEmailMessage,
              );
              await expect(errorElement).toBeVisible();
            } else if (data.assertionType === "form_block") {
              // Form dính validate HTML5 (trống trường, sai định dạng email) sẽ không load trang
              await expect(page).toHaveURL(/.*login/);
            }
          },
        );
      },
    );
  });
});
