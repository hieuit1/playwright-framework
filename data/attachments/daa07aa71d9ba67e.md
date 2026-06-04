# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web/cart.spec.ts >> Cart Feature Tests - Professional Suite >> [Boundary] Add a large quantity (20) of a single product
- Location: tests/web/cart.spec.ts:116:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.cart_quantity button').first()
Expected: "20"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.cart_quantity button').first()

```

```yaml
- heading "This website is under heavy load (queue full)" [level=2]
- paragraph: We're sorry, too many people are accessing this website at the same time. We're working on this problem. Please try again later.
```

# Test source

```ts
  1  | import { Page, expect } from "@playwright/test";
  2  | 
  3  | export class CartPage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   // Locators
  7  |   cartTable = "#cart_info_table";
  8  |   cartItems = "#cart_info_table tbody tr";
  9  |   cartItemDescription = ".cart_description h4 a";
  10 |   proceedToCheckoutButton = "a.check_out";
  11 |   loginRegisterModal = "#checkoutModal";
  12 | 
  13 |   // Methods
  14 |   async gotoCart() {
  15 |     await this.page.goto("https://automationexercise.com/view_cart");
  16 |   }
  17 | 
  18 |   async verifyProductInCart(productName: string) {
  19 |     await this.page.waitForSelector(this.cartTable);
  20 |     const productLocator = this.page.locator(this.cartItemDescription, {
  21 |       hasText: productName,
  22 |     });
  23 |     await expect(productLocator).toBeVisible();
  24 |   }
  25 | 
  26 |   async verifyProductQuantity(expectedQty: string) {
  27 |     const quantityBtn = this.page.locator(".cart_quantity button").first();
> 28 |     await expect(quantityBtn).toHaveText(expectedQty);
     |                               ^ Error: expect(locator).toHaveText(expected) failed
  29 |   }
  30 | 
  31 |   // Bấm nút xóa hình dấu X màu đỏ ở dòng đầu tiên
  32 |   async clickRemoveFirstProduct() {
  33 |     await this.page.locator(".cart_quantity_delete").first().click();
  34 |   }
  35 | 
  36 |   async verifyCartIsEmpty() {
  37 |     // Kiểm tra xem giỏ hàng có rỗng không (thông báo 'Cart is empty' hoặc không có item nào)
  38 |     const emptyCartMsg = this.page.locator("#empty_cart");
  39 |     const hasEmptyCartMessage = await emptyCartMsg.isVisible();
  40 | 
  41 |     if (!hasEmptyCartMessage) {
  42 |       const rows = this.page.locator(this.cartItems);
  43 |       await expect(
  44 |         rows,
  45 |         "Lỗi: Giỏ hàng không rỗng! Chưa đăng nhập nhưng vẫn thêm được sản phẩm vào giỏ.",
  46 |       ).toHaveCount(0);
  47 |     } else {
  48 |       await expect(emptyCartMsg).toBeVisible();
  49 |     }
  50 |   }
  51 | 
  52 |   async verifyCartItemCount(expectedCount: number) {
  53 |     await this.page.waitForSelector(this.cartTable);
  54 |     const rows = this.page.locator(this.cartItems);
  55 |     await expect(
  56 |       rows,
  57 |       `Lỗi: Giỏ hàng phải có ${expectedCount} sản phẩm.`,
  58 |     ).toHaveCount(expectedCount);
  59 |   }
  60 | 
  61 |   async clickProceedToCheckout() {
  62 |     await this.page.locator(this.proceedToCheckoutButton).click();
  63 |   }
  64 | 
  65 |   async verifyLoginRegisterModalVisible() {
  66 |     const modal = this.page.locator(this.loginRegisterModal);
  67 |     await expect(modal).toBeVisible();
  68 |   }
  69 | 
  70 |   async verifyProceedToCheckoutNotVisible() {
  71 |     const btn = this.page.locator(this.proceedToCheckoutButton);
  72 |     await expect(btn).not.toBeVisible();
  73 |   }
  74 | }
  75 | 
```