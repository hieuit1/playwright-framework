# Playwright End-to-End Automation Testing Framework

Dự án này xây dựng một cấu trúc mã nguồn tự động hóa kiểm thử (Automation Testing Framework) sử dụng **Playwright** và **TypeScript** để kiểm thử giao diện người dùng (E2E) trên trang web [Automation Exercise](https://automationexercise.com).

## 🚀 Tính năng nổi bật

- **Page Object Model (POM):** Phân tách rõ ràng giữa định nghĩa phần tử (Locators), hành động (Actions) trên trang và kịch bản kiểm thử (Test Cases).
- **Custom Fixtures (Dependency Injection):** Tự động khởi tạo và tiêm (inject) các Page Object vào từng test case qua `baseTest.ts`, giúp tối giản hóa mã nguồn.
- **Hệ thống Chặn Quảng Cáo (Ad-Blocking System):**
  - **Lớp khiên 1 (Network level):** Chặn tải các tài nguyên quảng cáo (Google Ads, DoubleClick, vignette) từ tầng mạng.
  - **Lớp khiên 2 (DOM level):** Tự động tiêm đoạn mã CSS ẩn toàn bộ iframe quảng cáo ngay khi trình duyệt khởi tạo để tránh bị che khuất phần tử và giảm thiểu lỗi flaky test.
- **Báo cáo Allure (Allure Reports):** Tích hợp sâu với Allure Playwright, tự động chụp ảnh màn hình (screenshot) sau mỗi bước kiểm thử (kể cả khi thành công hay thất bại) nhờ hàm bọc `step`.
- **Data-Driven Testing:** Hỗ trợ kiểm thử hướng dữ liệu (ví dụ: chạy nhiều kịch bản đăng nhập không hợp lệ từ file cấu hình dữ liệu đầu vào).

---

## 📁 Cấu trúc Thư mục

```text
playwright-framework/
├── pages/                    # Chứa các Page Object Models
│   ├── AccountInfoPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── PaymentPage.ts
│   ├── ProductDetailsPage.ts
│   ├── ProductsPage.ts
│   └── RegisterPage.ts
├── tests/                    # Thư mục chứa kịch bản kiểm thử
│   ├── helpers/
│   │   ├── baseTest.ts       # Định nghĩa fixtures và bộ lọc quảng cáo
│   │   └── stepWithScreenshot.ts # Định nghĩa hàm step hỗ trợ chụp ảnh và Allure
│   └── web/                  # Các file kịch bản kiểm thử cụ thể (.spec.ts)
│       ├── cart.spec.ts
│       ├── checkout.spec.ts
│       ├── e2e.spec.ts
│       ├── login.spec.ts
│       └── ...
├── test-data/                # Chứa dữ liệu đầu vào cho các bài kiểm thử
├── playwright.config.ts      # File cấu hình Playwright (Worker, Browser, Timeout, v.v.)
├── package.json              # Cấu hình dự án và các câu lệnh scripts
└── README.md                 # Tài liệu hướng dẫn sử dụng dự án
```

---

## 🛠️ Cài đặt & Chuẩn bị

1. **Cài đặt các gói thư viện phụ thuộc (Node.js):**
   ```bash
   npm install
   ```

2. **Cài đặt các trình duyệt được quản lý bởi Playwright:**
   ```bash
   npx playwright install chrome
   ```

3. **Cài đặt Allure Commandline (Để xem báo cáo cục bộ):**
   Đảm bảo máy của bạn đã cài đặt Java (để chạy Allure) và cài đặt Allure CLI qua NPM:
   ```bash
   npm install -g allure-commandline
   ```

---

## 🏃 Hướng dẫn Chạy Kiểm thử

Các lệnh chạy test đã được cấu hình sẵn trong `package.json` thông qua CLI của Playwright:

### 1. Chạy theo bộ test (Suite)
- **Chạy toàn bộ tests ở chế độ chạy ngầm (Headless):**
  ```bash
  npm run test
  ```
- **Chạy toàn bộ tests ở chế độ hiển thị trình duyệt (Headed):**
  ```bash
  npm run test:headed
  ```
- **Chạy Smoke Tests (Gán tag `@smoke`):**
  ```bash
  npm run test:smoke
  ```
- **Chạy Regression Tests (Gán tag `@regression`):**
  ```bash
  npm run test:regression
  ```
- **Chạy End-to-End Tests (Gán tag `@e2e`):**
  ```bash
  npm run test:e2e
  ```

### 2. Chạy theo tính năng (Feature)
- **Kiểm thử Đăng nhập:**
  ```bash
  npm run test:feature:login
  ```
- **Kiểm thử Giỏ hàng:**
  ```bash
  npm run test:feature:cart
  ```
- **Kiểm thử Thanh toán:**
  ```bash
  npm run test:feature:payment
  ```

---

## 📊 Xuất Báo cáo Allure (Allure Report)

Dự án cung cấp các lệnh tích hợp vừa chạy test vừa tự động tạo và mở báo cáo trực quan trên trình duyệt:

- **Chạy Smoke test và hiển thị báo cáo Allure:**
  ```bash
  npm run test:smoke:report
  ```
- **Chạy Regression test và hiển thị báo cáo Allure:**
  ```bash
  npm run test:regression:report
  ```
- **Chạy E2E test và hiển thị báo cáo Allure:**
  ```bash
  npm run test:e2e:report
  ```

*Lưu ý: Báo cáo Allure sẽ đính kèm chi tiết từng bước hành động thực thi kèm hình ảnh chụp giao diện tương ứng ở thời điểm chạy.*

---

## ⚙️ Cấu hình Quan trọng (`playwright.config.ts`)

- **Base URL:** Mặc định trỏ đến `https://automationexercise.com`.
- **Workers:** Sử dụng tối đa 3 workers để chạy song song ở máy cục bộ, và tự động giảm xuống `50%` nếu chạy trên các môi trường CI để tránh lỗi tràn bộ nhớ (Out of Memory).
- **Trình duyệt thực tế:** Sử dụng `channel: "chrome"` để thực hiện kiểm thử trên trình duyệt Google Chrome thực tế thay vì Chromium mặc định, giúp giả lập môi trường người dùng thật tốt hơn.
- **Ghi hình & Ảnh chụp:**
  - `screenshot: "on"`: Luôn chụp ảnh màn hình.
  - `video: "on"`: Luôn ghi hình quá trình chạy test.
