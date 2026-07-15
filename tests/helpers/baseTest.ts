import { test as baseTest } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";
import { ProductsPage } from "../../pages/ProductsPage";
import { CartPage } from "../../pages/CartPage";
import { CheckoutPage } from "../../pages/CheckoutPage";
import { PaymentPage } from "../../pages/PaymentPage";
import { RegisterPage } from "../../pages/RegisterPage";
import { ProductDetailsPage } from "../../pages/ProductDetailsPage";
import { AccountInfoPage } from "../../pages/AccountInfoPage";
import { SeoPage } from "../../pages/SeoPage";
import { PerformancePage } from "../../pages/PerformancePage";

type MyFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  paymentPage: PaymentPage;
  registerPage: RegisterPage;
  productDetailsPage: ProductDetailsPage;
  accountInfoPage: AccountInfoPage;
  seoPage: SeoPage;
  performancePage: PerformancePage;
};

export const test = baseTest.extend<MyFixtures>({
  // Tự động khởi tạo (inject) các Page Object
  homePage: async ({ page }, use) => { await use(new HomePage(page)); },
  loginPage: async ({ page }, use) => { await use(new LoginPage(page)); },
  productsPage: async ({ page }, use) => { await use(new ProductsPage(page)); },
  cartPage: async ({ page }, use) => { await use(new CartPage(page)); },
  checkoutPage: async ({ page }, use) => { await use(new CheckoutPage(page)); },
  paymentPage: async ({ page }, use) => { await use(new PaymentPage(page)); },
  registerPage: async ({ page }, use) => { await use(new RegisterPage(page)); },
  productDetailsPage: async ({ page }, use) => { await use(new ProductDetailsPage(page)); },
  accountInfoPage: async ({ page }, use) => { await use(new AccountInfoPage(page)); },
  seoPage: async ({ page }, use) => { await use(new SeoPage(page)); },
  performancePage: async ({ page }, use) => { await use(new PerformancePage(page)); },

  page: async ({ page }, use) => {
    // ==========================================
    // LỚP KHIÊN 1: Chặn tải quảng cáo từ Network (Nâng cấp từ khóa)
    // ==========================================
    await page.route("**/*", (route) => {
      const url = route.request().url();
      const blockedKeywords = [
        "googleads",
        "googlesyndication",
        "doubleclick",
        "adservice",
        "vignette", // Từ khóa chuyên trị cái popup che màn hình
        "adsbygoogle",
      ];

      if (blockedKeywords.some((keyword) => url.includes(keyword))) {
        route.abort();
      } else {
        route.continue();
      }
    });

    // ==========================================
    // LỚP KHIÊN 2: Tiêm CSS ẩn quảng cáo (Tuyệt chiêu cuối)
    // ==========================================
    // Lệnh này sẽ chạy ngầm ngay khi web vừa mở ra, ép tất cả các
    // thẻ iframe quảng cáo của Google phải "tàng hình" (display: none)
    await page.addInitScript(() => {
      const style = document.createElement("style");
      style.innerHTML = `
                /* Ẩn các iframe bắt đầu bằng chữ aswift hoặc ad_ (chuẩn của Google Ads) */
                iframe[name^="aswift"], 
                iframe[id^="ad_"], 
                .adsbygoogle, 
                div[id^="google_vignette"] { 
                    display: none !important; 
                    width: 0 !important; 
                    height: 0 !important; 
                }
            `;
      document.documentElement.appendChild(style);
    });

    // Trả page về cho test case sử dụng
    await use(page);
  },
});

export { expect } from "@playwright/test";
