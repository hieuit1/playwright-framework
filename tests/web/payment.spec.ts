import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { CartPage } from "../../pages/CartPage";
import { CheckoutPage } from "../../pages/CheckoutPage";
import { PaymentPage } from "../../pages/PaymentPage";
import { LoginPage } from "../../pages/LoginPage";
import { allure } from "allure-playwright";
import { step } from "../helpers/stepWithScreenshot";
import {
  invalidPaymentCases,
  validPaymentData,
} from "../../test-data/paymentData";

test.describe("Payment Feature Tests", () => {
  let homePage: HomePage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;
  let paymentPage: PaymentPage;
  let loginPage: LoginPage;

  const USER_EMAIL =
    process.env.TEST_USER_EMAIL || "automationtesterpro@gmail.com";
  const USER_PASSWORD = process.env.TEST_USER_PASSWORD || "123456";

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    paymentPage = new PaymentPage(page);
    loginPage = new LoginPage(page);

    await allure.epic("E-commerce");
    await allure.feature("Payment");
  });

  // HÀM HELPER: Gộp tất cả các bước cồng kềnh trước khi tới trang Payment
  async function setupCheckoutFlow(page: any) {
    await step(
      page,
      "Setup: Đăng nhập -> Thêm sản phẩm -> Checkout",
      async () => {
        await loginPage.gotoLoginPage();
        await loginPage.login(USER_EMAIL, USER_PASSWORD);
        await homePage.goto();
        await homePage.addFirstProductToCart();
        await homePage.clickModalViewCart();
        await cartPage.clickProceedToCheckout();
        await checkoutPage.verifyCheckoutPageVisible();
        await checkoutPage.clickPlaceOrder();
        await checkoutPage.dismissPopupIfPresent();
      },
    );
  }

  // ==================== POSITIVE TEST CASES ====================
  test(
    "Complete checkout flow and download invoice successfully",
    {
      tag: ["@payment", "@priority:critical"],
      annotation: [{ type: "severity", description: "blocker" }],
    },
    async ({ page }) => {
      await allure.story("Successful Payment And Invoice Download");
      await setupCheckoutFlow(page);

      await step(page, "1. Thanh toán với thẻ hợp lệ", async () => {
        // Sử dụng validPaymentData thay vì checkoutData
        await paymentPage.fillPaymentDetails(validPaymentData);
        await paymentPage.clickPayAndConfirm();
        await paymentPage.verifyOrderSuccess();
      });

      await step(page, "2. Download Invoice", async () => {
        const download = await paymentPage.clickDownloadInvoice();
        expect(download.suggestedFilename()).toBeTruthy();
      });

      await step(page, "3. Continue về Home", async () => {
        await paymentPage.clickContinue();
        await expect(page).toHaveURL(/automationexercise\.com/);
      });
    },
  );

  // ==================== NEGATIVE TEST CASES ====================
  invalidPaymentCases.forEach(
    ({ scenario, data, clearField, priority, severity }) => {
      test(
        `Payment should fail with ${scenario}`,
        {
          tag: ["@payment", `@priority:${priority}`],
          annotation: [{ type: "severity", description: severity }],
        },
        async ({ page }) => {
          await allure.story(`Payment With ${scenario.toUpperCase()}`);

          await setupCheckoutFlow(page);

          await step(
            page,
            `Điền thông tin thanh toán: ${scenario}`,
            async () => {
              await paymentPage.fillPaymentDetails(data);

              if (clearField) {
                await paymentPage.clearCardField(clearField as any);
              }
            },
          );

          await step(
            page,
            "Click Pay và xác nhận payment thất bại",
            async () => {
              await paymentPage.clickPayAndConfirm();
              await paymentPage.verifyPaymentFailed();
            },
          );
        },
      );
    },
  );
});
