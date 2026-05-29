import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { CartPage } from "../../pages/CartPage";
import { CheckoutPage } from "../../pages/CheckoutPage";
import { PaymentPage } from "../../pages/PaymentPage";
import { LoginPage } from "../../pages/LoginPage";
import { checkoutData } from "../../test-data/checkoutData";
import { allure } from "allure-playwright";
import { step } from "../helpers/stepWithScreenshot";

test.describe("Payment Feature Tests", () => {
  // ==================== NEGATIVE TEST CASES ====================

  test(
    "Payment with short card number should fail",
    {
      tag: ["@payment", "@priority:high"],
      annotation: [{ type: "severity", description: "critical" }],
    },
    async ({ page }) => {
      const homePage = new HomePage(page);
      const cartPage = new CartPage(page);
      const checkoutPage = new CheckoutPage(page);
      const paymentPage = new PaymentPage(page);
      const loginPage = new LoginPage(page);

      await allure.epic("E-commerce");
      await allure.feature("Payment");
      await allure.story("Payment With Short Card Number");

      await step(
        page,
        "1. Đi tới trang Đăng nhập và đăng nhập thành công",
        async () => {
          await loginPage.gotoLoginPage();
          await loginPage.login("automationtesterpro@gmail.com", "123456");
        },
      );

      await step(
        page,
        "2. Đi tới trang chủ và thêm sản phẩm vào giỏ hàng",
        async () => {
          await homePage.goto();
          await homePage.addFirstProductToCart();
        },
      );

      await step(page, "3. Xem giỏ hàng và Proceed to Checkout", async () => {
        await homePage.clickModalViewCart();
        await cartPage.clickProceedToCheckout();
      });

      await step(page, "4. Xác nhận trang Checkout hiển thị", async () => {
        await checkoutPage.verifyCheckoutPageVisible();
      });

      await step(page, "5. Click Place Order", async () => {
        await checkoutPage.clickPlaceOrder();
      });

      await step(page, "6. Dismiss popup nếu xuất hiện", async () => {
        await checkoutPage.dismissPopupIfPresent();
      });

      await step(
        page,
        "7. Điền thông tin thanh toán với card number quá ngắn",
        async () => {
          await paymentPage.fillPaymentDetails(checkoutData.shortCardNumber);
        },
      );

      await step(page, "8. Click Pay", async () => {
        await paymentPage.clickPayAndConfirm();
      });

      await step(page, "9. Xác nhận payment thất bại", async () => {
        await paymentPage.verifyPaymentFailed();
      });
    },
  );

  test(
    "Payment with invalid CVC should fail",
    {
      tag: ["@payment", "@priority:high"],
      annotation: [{ type: "severity", description: "critical" }],
    },
    async ({ page }) => {
      const homePage = new HomePage(page);
      const cartPage = new CartPage(page);
      const checkoutPage = new CheckoutPage(page);
      const paymentPage = new PaymentPage(page);
      const loginPage = new LoginPage(page);

      await allure.epic("E-commerce");
      await allure.feature("Payment");
      await allure.story("Payment With Invalid CVC");

      await step(
        page,
        "1. Đi tới trang Đăng nhập và đăng nhập thành công",
        async () => {
          await loginPage.gotoLoginPage();
          await loginPage.login("automationtesterpro@gmail.com", "123456");
        },
      );

      await step(
        page,
        "2. Đi tới trang chủ và thêm sản phẩm vào giỏ hàng",
        async () => {
          await homePage.goto();
          await homePage.addFirstProductToCart();
        },
      );

      await step(page, "3. Xem giỏ hàng và Proceed to Checkout", async () => {
        await homePage.clickModalViewCart();
        await cartPage.clickProceedToCheckout();
      });

      await step(page, "4. Click Place Order", async () => {
        await checkoutPage.verifyCheckoutPageVisible();
        await checkoutPage.clickPlaceOrder();
      });

      await step(page, "5. Dismiss popup nếu xuất hiện", async () => {
        await checkoutPage.dismissPopupIfPresent();
      });

      await step(
        page,
        "6. Điền thông tin thanh toán với CVC không hợp lệ",
        async () => {
          await paymentPage.fillPaymentDetails(checkoutData.invalidCVC);
        },
      );

      await step(page, "7. Click Pay", async () => {
        await paymentPage.clickPayAndConfirm();
      });

      await step(page, "8. Xác nhận payment thất bại", async () => {
        await paymentPage.verifyPaymentFailed();
      });
    },
  );

  test(
    "Payment with expired card should fail",
    {
      tag: ["@payment", "@priority:high"],
      annotation: [{ type: "severity", description: "critical" }],
    },
    async ({ page }) => {
      const homePage = new HomePage(page);
      const cartPage = new CartPage(page);
      const checkoutPage = new CheckoutPage(page);
      const paymentPage = new PaymentPage(page);
      const loginPage = new LoginPage(page);

      await allure.epic("E-commerce");
      await allure.feature("Payment");
      await allure.story("Payment With Expired Card");

      await step(
        page,
        "1. Đi tới trang Đăng nhập và đăng nhập thành công",
        async () => {
          await loginPage.gotoLoginPage();
          await loginPage.login("automationtesterpro@gmail.com", "123456");
        },
      );

      await step(
        page,
        "2. Đi tới trang chủ và thêm sản phẩm vào giỏ hàng",
        async () => {
          await homePage.goto();
          await homePage.addFirstProductToCart();
        },
      );

      await step(page, "3. Xem giỏ hàng và Proceed to Checkout", async () => {
        await homePage.clickModalViewCart();
        await cartPage.clickProceedToCheckout();
      });

      await step(page, "4. Click Place Order", async () => {
        await checkoutPage.verifyCheckoutPageVisible();
        await checkoutPage.clickPlaceOrder();
      });

      await step(page, "5. Dismiss popup nếu xuất hiện", async () => {
        await checkoutPage.dismissPopupIfPresent();
      });

      await step(
        page,
        "6. Điền thông tin thanh toán với card hết hạn",
        async () => {
          await paymentPage.fillPaymentDetails(checkoutData.expiredCard);
        },
      );

      await step(page, "7. Click Pay", async () => {
        await paymentPage.clickPayAndConfirm();
      });

      await step(page, "8. Xác nhận payment thất bại", async () => {
        await paymentPage.verifyPaymentFailed();
      });
    },
  );

  test(
    "Payment with invalid expiry month should fail",
    {
      tag: ["@payment", "@priority:medium"],
      annotation: [{ type: "severity", description: "normal" }],
    },
    async ({ page }) => {
      const homePage = new HomePage(page);
      const cartPage = new CartPage(page);
      const checkoutPage = new CheckoutPage(page);
      const paymentPage = new PaymentPage(page);
      const loginPage = new LoginPage(page);

      await allure.epic("E-commerce");
      await allure.feature("Payment");
      await allure.story("Payment With Invalid Expiry Month");

      await step(
        page,
        "1. Đi tới trang Đăng nhập và đăng nhập thành công",
        async () => {
          await loginPage.gotoLoginPage();
          await loginPage.login("automationtesterpro@gmail.com", "123456");
        },
      );

      await step(
        page,
        "2. Đi tới trang chủ và thêm sản phẩm vào giỏ hàng",
        async () => {
          await homePage.goto();
          await homePage.addFirstProductToCart();
        },
      );

      await step(page, "3. Xem giỏ hàng và Proceed to Checkout", async () => {
        await homePage.clickModalViewCart();
        await cartPage.clickProceedToCheckout();
      });

      await step(page, "4. Click Place Order", async () => {
        await checkoutPage.verifyCheckoutPageVisible();
        await checkoutPage.clickPlaceOrder();
      });

      await step(page, "5. Dismiss popup nếu xuất hiện", async () => {
        await checkoutPage.dismissPopupIfPresent();
      });

      await step(
        page,
        "6. Điền thông tin thanh toán với tháng không hợp lệ",
        async () => {
          await paymentPage.fillPaymentDetails(checkoutData.invalidExpiryMonth);
        },
      );

      await step(page, "7. Click Pay", async () => {
        await paymentPage.clickPayAndConfirm();
      });

      await step(page, "8. Xác nhận payment thất bại", async () => {
        await paymentPage.verifyPaymentFailed();
      });
    },
  );

  test(
    "Payment with empty card name should fail",
    {
      tag: ["@payment", "@priority:medium"],
      annotation: [{ type: "severity", description: "normal" }],
    },
    async ({ page }) => {
      const homePage = new HomePage(page);
      const cartPage = new CartPage(page);
      const checkoutPage = new CheckoutPage(page);
      const paymentPage = new PaymentPage(page);
      const loginPage = new LoginPage(page);

      await allure.epic("E-commerce");
      await allure.feature("Payment");
      await allure.story("Payment With Empty Card Name");

      await step(
        page,
        "1. Đi tới trang Đăng nhập và đăng nhập thành công",
        async () => {
          await loginPage.gotoLoginPage();
          await loginPage.login("automationtesterpro@gmail.com", "123456");
        },
      );

      await step(
        page,
        "2. Đi tới trang chủ và thêm sản phẩm vào giỏ hàng",
        async () => {
          await homePage.goto();
          await homePage.addFirstProductToCart();
        },
      );

      await step(page, "3. Xem giỏ hàng và Proceed to Checkout", async () => {
        await homePage.clickModalViewCart();
        await cartPage.clickProceedToCheckout();
      });

      await step(page, "4. Click Place Order", async () => {
        await checkoutPage.verifyCheckoutPageVisible();
        await checkoutPage.clickPlaceOrder();
      });

      await step(page, "5. Dismiss popup nếu xuất hiện", async () => {
        await checkoutPage.dismissPopupIfPresent();
      });

      await step(
        page,
        "6. Điền thông tin thanh toán và xóa tên chủ thẻ",
        async () => {
          await paymentPage.fillPaymentDetails(checkoutData.validCard);
          await paymentPage.clearCardField("name");
        },
      );

      await step(page, "7. Click Pay", async () => {
        await paymentPage.clickPayAndConfirm();
      });

      await step(page, "8. Xác nhận payment thất bại", async () => {
        await paymentPage.verifyPaymentFailed();
      });
    },
  );

  test(
    "Payment with empty card number should fail",
    {
      tag: ["@payment", "@priority:high"],
      annotation: [{ type: "severity", description: "critical" }],
    },
    async ({ page }) => {
      const homePage = new HomePage(page);
      const cartPage = new CartPage(page);
      const checkoutPage = new CheckoutPage(page);
      const paymentPage = new PaymentPage(page);
      const loginPage = new LoginPage(page);

      await allure.epic("E-commerce");
      await allure.feature("Payment");
      await allure.story("Payment With Empty Card Number");

      await step(
        page,
        "1. Đi tới trang Đăng nhập và đăng nhập thành công",
        async () => {
          await loginPage.gotoLoginPage();
          await loginPage.login("automationtesterpro@gmail.com", "123456");
        },
      );

      await step(
        page,
        "2. Đi tới trang chủ và thêm sản phẩm vào giỏ hàng",
        async () => {
          await homePage.goto();
          await homePage.addFirstProductToCart();
        },
      );

      await step(page, "3. Xem giỏ hàng và Proceed to Checkout", async () => {
        await homePage.clickModalViewCart();
        await cartPage.clickProceedToCheckout();
      });

      await step(page, "4. Click Place Order", async () => {
        await checkoutPage.verifyCheckoutPageVisible();
        await checkoutPage.clickPlaceOrder();
      });

      await step(page, "5. Dismiss popup nếu xuất hiện", async () => {
        await checkoutPage.dismissPopupIfPresent();
      });

      await step(
        page,
        "6. Điền thông tin thanh toán và xóa số thẻ",
        async () => {
          await paymentPage.fillPaymentDetails(checkoutData.validCard);
          await paymentPage.clearCardField("cardNumber");
        },
      );

      await step(page, "7. Click Pay", async () => {
        await paymentPage.clickPayAndConfirm();
      });

      await step(page, "8. Xác nhận payment thất bại", async () => {
        await paymentPage.verifyPaymentFailed();
      });
    },
  );

  test(
    "Payment with empty CVC should fail",
    {
      tag: ["@payment", "@priority:high"],
      annotation: [{ type: "severity", description: "critical" }],
    },
    async ({ page }) => {
      const homePage = new HomePage(page);
      const cartPage = new CartPage(page);
      const checkoutPage = new CheckoutPage(page);
      const paymentPage = new PaymentPage(page);
      const loginPage = new LoginPage(page);

      await allure.epic("E-commerce");
      await allure.feature("Payment");
      await allure.story("Payment With Empty CVC");

      await step(
        page,
        "1. Đi tới trang Đăng nhập và đăng nhập thành công",
        async () => {
          await loginPage.gotoLoginPage();
          await loginPage.login("automationtesterpro@gmail.com", "123456");
        },
      );

      await step(
        page,
        "2. Đi tới trang chủ và thêm sản phẩm vào giỏ hàng",
        async () => {
          await homePage.goto();
          await homePage.addFirstProductToCart();
        },
      );

      await step(page, "3. Xem giỏ hàng và Proceed to Checkout", async () => {
        await homePage.clickModalViewCart();
        await cartPage.clickProceedToCheckout();
      });

      await step(page, "4. Click Place Order", async () => {
        await checkoutPage.verifyCheckoutPageVisible();
        await checkoutPage.clickPlaceOrder();
      });

      await step(page, "5. Dismiss popup nếu xuất hiện", async () => {
        await checkoutPage.dismissPopupIfPresent();
      });

      await step(page, "6. Điền thông tin thanh toán và xóa CVC", async () => {
        await paymentPage.fillPaymentDetails(checkoutData.validCard);
        await paymentPage.clearCardField("cvc");
      });

      await step(page, "7. Click Pay", async () => {
        await paymentPage.clickPayAndConfirm();
      });

      await step(page, "8. Xác nhận payment thất bại", async () => {
        await paymentPage.verifyPaymentFailed();
      });
    },
  );

  // ==================== POSITIVE TEST CASES ====================

  test(
    "Complete checkout flow and payment should succeed",
    {
      tag: ["@payment", "@priority:critical"],
      annotation: [{ type: "severity", description: "blocker" }],
    },
    async ({ page }) => {
      const homePage = new HomePage(page);
      const cartPage = new CartPage(page);
      const checkoutPage = new CheckoutPage(page);
      const paymentPage = new PaymentPage(page);
      const loginPage = new LoginPage(page);

      await allure.epic("E-commerce");
      await allure.feature("Payment");
      await allure.story("Complete Checkout And Payment");

      await step(page, "1. Đăng nhập", async () => {
        await loginPage.gotoLoginPage();
        await loginPage.login("automationtesterpro@gmail.com", "123456");
      });

      let productName: any;
      await step(
        page,
        "2. Thêm sản phẩm vào giỏ hàng từ trang Home",
        async () => {
          await homePage.goto();
          productName = await homePage.addFirstProductToCart();
          expect(productName).toBeTruthy();
        },
      );

      await step(page, "3. Vào giỏ hàng và kiểm tra sản phẩm", async () => {
        await homePage.clickModalViewCart();
        if (productName) {
          await cartPage.verifyProductInCart(productName as string);
        }
      });

      await step(page, "4. Click Proceed To Checkout", async () => {
        await cartPage.clickProceedToCheckout();
      });

      await step(
        page,
        "5. Kiểm tra trang Checkout hiển thị đầy đủ",
        async () => {
          await checkoutPage.verifyCheckoutPageVisible();
          await checkoutPage.verifyOrderReviewVisible();
        },
      );

      await step(page, "6. Click Place Order", async () => {
        await checkoutPage.clickPlaceOrder();
        await checkoutPage.dismissPopupIfPresent();
      });

      await step(page, "7. Điền thông tin thanh toán", async () => {
        await paymentPage.fillPaymentDetails(checkoutData.validCard);
      });

      await step(page, "8. Click Pay and Confirm Order", async () => {
        await paymentPage.clickPayAndConfirm();
      });

      await step(page, "9. Kiểm tra đặt hàng thành công", async () => {
        await paymentPage.verifyOrderSuccess();
      });
    },
  );

  test(
    "Payment with comment should succeed",
    {
      tag: ["@payment", "@priority:medium"],
      annotation: [{ type: "severity", description: "normal" }],
    },
    async ({ page }) => {
      const homePage = new HomePage(page);
      const cartPage = new CartPage(page);
      const checkoutPage = new CheckoutPage(page);
      const paymentPage = new PaymentPage(page);
      const loginPage = new LoginPage(page);

      await allure.epic("E-commerce");
      await allure.feature("Payment");
      await allure.story("Payment With Comment");

      await step(page, "1. Đăng nhập", async () => {
        await loginPage.gotoLoginPage();
        await loginPage.login("automationtesterpro@gmail.com", "123456");
      });

      await step(page, "2. Thêm sản phẩm vào giỏ hàng", async () => {
        await homePage.goto();
        await homePage.addFirstProductToCart();
        await homePage.clickModalViewCart();
      });

      await step(page, "3. Click Proceed To Checkout", async () => {
        await cartPage.clickProceedToCheckout();
      });

      await step(
        page,
        "4. Kiểm tra trang Checkout và nhập comment",
        async () => {
          await checkoutPage.verifyCheckoutPageVisible();
          await checkoutPage.enterComment(checkoutData.comment);
        },
      );

      await step(page, "5. Click Place Order", async () => {
        await checkoutPage.clickPlaceOrder();
        await checkoutPage.dismissPopupIfPresent();
      });

      await step(page, "6. Điền thông tin thanh toán và xác nhận", async () => {
        await paymentPage.fillPaymentDetails(checkoutData.validCard);
        await paymentPage.clickPayAndConfirm();
      });

      await step(page, "7. Kiểm tra đặt hàng thành công", async () => {
        await paymentPage.verifyOrderSuccess();
      });
    },
  );

  test(
    "Payment and download invoice should succeed",
    {
      tag: ["@payment", "@priority:medium"],
      annotation: [{ type: "severity", description: "normal" }],
    },
    async ({ page }) => {
      const homePage = new HomePage(page);
      const cartPage = new CartPage(page);
      const checkoutPage = new CheckoutPage(page);
      const paymentPage = new PaymentPage(page);
      const loginPage = new LoginPage(page);

      await allure.epic("E-commerce");
      await allure.feature("Payment");
      await allure.story("Payment And Download Invoice");

      await step(page, "1. Đăng nhập", async () => {
        await loginPage.gotoLoginPage();
        await loginPage.login("automationtesterpro@gmail.com", "123456");
      });

      await step(page, "2. Thêm sản phẩm vào giỏ hàng", async () => {
        await homePage.goto();
        await homePage.addFirstProductToCart();
        await homePage.clickModalViewCart();
      });

      await step(page, "3. Checkout flow", async () => {
        await cartPage.clickProceedToCheckout();
        await checkoutPage.verifyCheckoutPageVisible();
        await checkoutPage.clickPlaceOrder();
        await checkoutPage.dismissPopupIfPresent();
      });

      await step(page, "4. Thanh toán", async () => {
        await paymentPage.fillPaymentDetails(checkoutData.validCard);
        await paymentPage.clickPayAndConfirm();
      });

      await step(page, "5. Kiểm tra đặt hàng thành công", async () => {
        await paymentPage.verifyOrderSuccess();
      });

      await step(
        page,
        "6. Download Invoice và kiểm tra file được tải về",
        async () => {
          const download = await paymentPage.clickDownloadInvoice();
          const fileName = download.suggestedFilename();
          expect(fileName).toBeTruthy();
        },
      );

      await step(
        page,
        "7. Click Continue và kiểm tra quay về trang Home",
        async () => {
          await paymentPage.clickContinue();
          await expect(page).toHaveURL(/automationexercise\.com/);
        },
      );
    },
  );
});
