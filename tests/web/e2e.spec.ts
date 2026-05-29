import { test, expect } from "../helpers/baseTest";
import { HomePage } from "../../pages/HomePage";
import { CartPage } from "../../pages/CartPage";
import { CheckoutPage } from "../../pages/CheckoutPage";
import { PaymentPage } from "../../pages/PaymentPage";
import { LoginPage } from "../../pages/LoginPage";
import { ProductsPage } from "../../pages/ProductsPage";
import { checkoutData } from "../../test-data/checkoutData";
import { allure } from "allure-playwright";
import { step } from "../helpers/stepWithScreenshot";

test.describe("E2E Complete User Journey Tests", () => {
  test(
    "complete journey from search to successful order",
    {
      tag: ["@e2e", "@priority:critical"],
      annotation: [{ type: "severity", description: "blocker" }],
    },
    async ({ page }) => {
      const homePage = new HomePage(page);
      const productsPage = new ProductsPage(page);
      const cartPage = new CartPage(page);
      const checkoutPage = new CheckoutPage(page);
      const paymentPage = new PaymentPage(page);
      const loginPage = new LoginPage(page);

      // Phân cấp kịch bản cho Report
      await allure.epic("E2E User Journey");
      await allure.feature("Complete Purchase Flow");
      await allure.story("Search, Add to Cart, Checkout, Payment");

      // Step 1: Truy cập trang chủ
      await step(
        page,
        "1. Truy cập trang chủ Automation Exercise",
        async () => {
          await homePage.goto();
          await expect(page).toHaveURL(/automationexercise\.com/);
        },
      );

      // Step 2: Tìm kiếm sản phẩm
      await step(
        page,
        "2. Truy cập trang sản phẩm và tìm kiếm 'Top'",
        async () => {
          await productsPage.gotoProductsPage();
          await productsPage.searchForProduct("Top");
          await expect(page.locator("h2.title.text-center")).toContainText(
            /SEARCHED PRODUCTS/i,
          );
        },
      );

      // Step 3: Thêm 3 sản phẩm vào giỏ hàng
      await step(page, "3. Thêm 3 sản phẩm vào giỏ hàng", async () => {
        const addToCartBtns = page.locator(
          ".features_items .single-products .productinfo .add-to-cart",
        );

        for (let i = 0; i < 3; i++) {
          await addToCartBtns.nth(i).click();
          const modal = page.locator("#cartModal");
          await modal.waitFor({ state: "visible" });
          await page.locator("button.btn-success.close-modal").click();
          await modal.waitFor({ state: "hidden" });
        }
      });

      // Step 4: Kiểm tra giỏ hàng và tiến hành thanh toán
      await step(page, "4. Xem giỏ hàng và kiểm tra 3 sản phẩm", async () => {
        await cartPage.gotoCart();
        await cartPage.verifyCartItemCount(3);
      });

      // Step 5: Tiếp tục thanh toán
      await step(page, "5. Tiếp tục bước thanh toán", async () => {
        await cartPage.clickProceedToCheckout();

        const checkoutModal = page.locator("#checkoutModal");
        await checkoutModal.waitFor({ state: "visible" });
        await checkoutModal.locator("a[href='/login']").click();
      });

      // Step 6: Đăng nhập tài khoản
      await step(page, "6. Đăng nhập tài khoản", async () => {
        await loginPage.login("automationtesterpro@gmail.com", "123456");
      });

      // Step 7: Quay lại giỏ hàng và tiếp tục thanh toán
      await step(
        page,
        "7. Quay lại giỏ hàng và tiếp tục thanh toán",
        async () => {
          await cartPage.gotoCart();
          await cartPage.clickProceedToCheckout();
        },
      );

      // Step 8: Nhập bình luận và xác nhận đặt hàng
      await step(page, "8. Nhập bình luận và xác nhận đặt hàng", async () => {
        await checkoutPage.verifyCheckoutPageVisible();
        await checkoutPage.enterComment(
          "Please handle with care - fragile items",
        );
        await checkoutPage.clickPlaceOrder();
        await checkoutPage.dismissPopupIfPresent();
      });

      // Step 9: Nhập thông tin thẻ tín dụng và thanh toán
      await step(
        page,
        "9. Nhập thông tin thẻ tín dụng và thanh toán",
        async () => {
          await paymentPage.fillPaymentDetails(checkoutData.validCard);
          await paymentPage.clickPayAndConfirm();
        },
      );

      // Step 10: Kiểm tra đơn hàng thành công
      await step(
        page,
        "10. Xác nhận đơn hàng được đặt thành công",
        async () => {
          await paymentPage.verifyOrderSuccess();
        },
      );
    },
  );
});
