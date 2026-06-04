import { test, expect } from "../helpers/baseTest";
import { allure } from "allure-playwright";
import { step } from "../helpers/stepWithScreenshot";
import {
  invalidPaymentCases,
  validPaymentData,
} from "../../test-data/paymentData";

test.describe("Payment Feature Tests", () => {
  const USER_EMAIL =
    process.env.TEST_USER_EMAIL || "automationtesterpro@gmail.com";
  const USER_PASSWORD = process.env.TEST_USER_PASSWORD || "123456";

  test.beforeEach(async ({}) => {
    await allure.epic("E-commerce");
    await allure.feature("Payment");
  });

  // HÀM HELPER: Gộp tất cả các bước cồng kềnh trước khi tới trang Payment
  async function setupCheckoutFlow(
    page: any,
    loginPage: any,
    homePage: any,
    cartPage: any,
    checkoutPage: any
  ) {
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
      tag: [
        "@payment",
        "@priority:critical",
        "@smoke",
        "@regression",
        "@positive",
      ],
      annotation: [{ type: "severity", description: "blocker" }],
    },
    async ({ page, loginPage, homePage, cartPage, checkoutPage, paymentPage }) => {
      await allure.story("Successful Payment And Invoice Download");
      await setupCheckoutFlow(page, loginPage, homePage, cartPage, checkoutPage);

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
  //           },
  //         );
  //       },
  //     );
  //   },
  // );
});
