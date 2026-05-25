# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Cart Feature Tests >> Add product from details page with custom quantity without login should fail 
- Location: tests\cart.spec.ts:27:9

# Error details

```
Error: Lỗi: Giỏ hàng không rỗng! Chưa đăng nhập nhưng vẫn thêm được sản phẩm vào giỏ.

expect(locator).toHaveCount(expected) failed

Locator:  locator('#cart_info_table tbody tr')
Expected: 0
Received: 1
Timeout:  5000ms

Call log:
  - Lỗi: Giỏ hàng không rỗng! Chưa đăng nhập nhưng vẫn thêm được sản phẩm vào giỏ. with timeout 5000ms
  - waiting for locator('#cart_info_table tbody tr')
    14 × locator resolved to 1 element
       - unexpected value "1"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e38]:
    - list [ref=e40]:
      - listitem [ref=e41]:
        - link "Home" [ref=e42] [cursor=pointer]:
          - /url: /
      - listitem [ref=e43]: Shopping Cart
    - generic [ref=e48] [cursor=pointer]: Proceed To Checkout
    - table [ref=e50]:
      - rowgroup [ref=e51]:
        - row "Item Description Price Quantity Total" [ref=e52]:
          - cell "Item" [ref=e53]
          - cell "Description" [ref=e54]
          - cell "Price" [ref=e55]
          - cell "Quantity" [ref=e56]
          - cell "Total" [ref=e57]
          - cell [ref=e58]
      - rowgroup [ref=e59]:
        - row "Product Image Blue Top Women > Tops Rs. 500 1000 Rs. 500000 " [ref=e60]:
          - cell "Product Image" [ref=e61]:
            - link "Product Image" [ref=e62] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e63]
          - cell "Blue Top Women > Tops" [ref=e64]:
            - heading "Blue Top" [level=4] [ref=e65]:
              - link "Blue Top" [ref=e66] [cursor=pointer]:
                - /url: /product_details/1
            - paragraph [ref=e67]: Women > Tops
          - cell "Rs. 500" [ref=e68]:
            - paragraph [ref=e69]: Rs. 500
          - cell "1000" [ref=e70]:
            - button "1000" [ref=e71] [cursor=pointer]
          - cell "Rs. 500000" [ref=e72]:
            - paragraph [ref=e73]: Rs. 500000
          - cell "" [ref=e74]:
            - generic [ref=e76] [cursor=pointer]: 
  - contentinfo [ref=e77]:
    - generic [ref=e82]:
      - heading "Subscription" [level=2] [ref=e83]
      - generic [ref=e84]:
        - textbox "Your email address" [ref=e85]
        - button "" [ref=e86] [cursor=pointer]:
          - generic [ref=e87]: 
        - paragraph [ref=e88]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e92]: Copyright © 2021 All rights reserved
  - text: 
  - generic:
    - insertion:
      - generic:
        - iframe
  - insertion [ref=e93]:
    - iframe [ref=e96]:
      - generic [active] [ref=f36e1]:
        - generic [ref=f36e3]:
          - link:
            - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=Cfq-yoKcTavCABeeirtoPwZ_hsAf337uehwGXkbCPxRXa2R4QASD9tJ6VAWDBtfoNoAGpi_iGKcgBAqkC4BlohN3bxD2oAwHIA8kEqgTxAU_QFeoQsGXz1eI2uxBUuNkD9hhrRb-LZ5xOjb8CAN4FNrL-qoGrp50Oe9e8fz-V08gvucj1u6MgHj6v6W54840Um0_lgNXesARJk-BXsGeiYno67biPKN1DQN5v0T3EU8lcr7BOixustobE8imK-WpY4piS7TjMpxycGPP7y20MTdT_6QeOtvdjqlWSD0l-SAMojHiM6YjPsRkn4o8x4gVRoYUSbBG366Ia_74UDPdFu_8gsMD2YTtVbMjdjl3oddAX-E47QRvzHR94zDzPsXUJn7koaRQhHXs_5n5Z6rT791uPlJyaVOoNt5-iLXJNLPHABOScvtP4BYgF4sCJyVigBgKAB6TH5ZYdqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggxCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOlj9qInEptOUA7EJkwywnDySlaWACgGYCwHICwGiDDliGAoWdm4uZnJ0LmxvbmdjaGF1LmNsaWVudGoVChN2bi5mcnQubG9uZ2NoYXUuYXBweAGIAQGQAQGqDQJWTsgNAeoNEwjK2YnEptOUAxVnkUsFHcFPGHbwDQKIDgnYEwPQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICyFEYAiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI8NCJxKbTlAMVZ5FLBR3BTxh2EAEYASAAEgJo7PD_BwE&num=1&cid=CAQS9QEABaugfZSnrhjvNuDnV2H2s3B6P9eWlqQ2NArupAyJuSAKCnaxVk8mDERWnYOy_uLqz1s1PHNA3spB5FN75UVuapMQwYU0wtGfA6W-xpm59QMsKpWUs5TNZ9SakBfFieGgoMyKLkkd9EaCR4CNlQmwR_WxYXB-aCI36nvnzkB1hhRziaHFGS_ohqOlkXKonauUBXxANh_ABuq2md8kmrStbX6019Pjlla23p0vg-RuXNxbMKOqK6eBtoDM3aJgQOxWLjOBUSstcD7iM6OuYPVupwxYlnHRzsQrUn1_OfZraaSj8OgT3dhyq978tl2TAh6Ky1sWYhgB&sig=AOD64_28S7bRZIMFaMqjs_HWpmRp9xaCtQ&client=ca-pub-1677597403311019&rf=2&nb=2&adurl=https://nhathuoclongchau.com.vn/thuc-pham-chuc-nang/sua-meiji-meibalance-huong-ngu-coc-24-hop-x-125-ml.html%3Futm_source%3DGoogle%26utm_medium%3DCPM%26utm_campaign%3DMeiji-T4-2026%26utm_term%3DGDN%26utm_content%3D806007630129%26gad_source%3D5%26gad_campaignid%3D23775567970%26gclid%3DEAIaIQobChMI8NCJxKbTlAMVZ5FLBR3BTxh2EAEYASAAEgJo7PD_BwE
          - img [ref=f36e7] [cursor=pointer]
          - button [ref=f36e9] [cursor=pointer]:
            - img [ref=f36e10]
        - iframe
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | 
  3  | export class CartPage {
  4  |     constructor(private page: Page) {}
  5  | 
  6  |     // Locators
  7  |     cartTable = '#cart_info_table';
  8  |     cartItems = '#cart_info_table tbody tr';
  9  |     cartItemDescription = '.cart_description h4 a';
  10 |     proceedToCheckoutButton = 'a.check_out';
  11 |     loginRegisterModal = '#checkoutModal';
  12 | 
  13 |     // Methods
  14 |     async gotoCart() {
  15 |         await this.page.goto('https://automationexercise.com/view_cart');
  16 |     }
  17 | 
  18 |     async verifyProductInCart(productName: string) {
  19 |         // Đợi cho bảng giỏ hàng hiển thị
  20 |         await this.page.waitForSelector(this.cartTable);
  21 |         // Tìm và verify sản phẩm theo tên có xuất hiện trong giỏ hàng không
  22 |         const productLocator = this.page.locator(this.cartItemDescription, { hasText: productName });
  23 |         await expect(productLocator).toBeVisible();
  24 |     }
  25 | 
  26 |     async verifyProductQuantity(productName: string, expectedQuantity: string) {
  27 |         // Đợi bảng hiển thị
  28 |         await this.page.waitForSelector(this.cartTable);
  29 |         
  30 |         // Tìm dòng sản phẩm dựa trên tên
  31 |         const rowLocator = this.page.locator(this.cartItems).filter({ hasText: productName });
  32 |         
  33 |         // Cột quantity có class .cart_quantity và thẻ con là button
  34 |         const quantityLocator = rowLocator.locator('.cart_quantity button');
  35 |         
  36 |         // Kiểm tra xem số lượng có đúng bằng expectedQuantity không
  37 |         await expect(quantityLocator).toHaveText(expectedQuantity);
  38 |     }
  39 | 
  40 |     async verifyCartIsEmpty() {
  41 |         // Kiểm tra xem giỏ hàng có rỗng không (thông báo 'Cart is empty' hoặc không có item nào)
  42 |         const emptyCartMsg = this.page.locator('#empty_cart');
  43 |         const hasEmptyCartMessage = await emptyCartMsg.isVisible();
  44 |         
  45 |         if (!hasEmptyCartMessage) {
  46 |             // Hoặc kiểm tra xem có dòng dữ liệu nào trong bảng cart không
  47 |             const rows = this.page.locator(this.cartItems);
> 48 |             await expect(rows, 'Lỗi: Giỏ hàng không rỗng! Chưa đăng nhập nhưng vẫn thêm được sản phẩm vào giỏ.').toHaveCount(0);
     |                                                                                                                  ^ Error: Lỗi: Giỏ hàng không rỗng! Chưa đăng nhập nhưng vẫn thêm được sản phẩm vào giỏ.
  49 |         } else {
  50 |             await expect(emptyCartMsg).toBeVisible();
  51 |         }
  52 |     }
  53 | 
  54 |     // Kiểm tra tổng số dòng sản phẩm trong giỏ hàng
  55 |     async verifyCartItemCount(expectedCount: number) {
  56 |         await this.page.waitForSelector(this.cartTable);
  57 |         const rows = this.page.locator(this.cartItems);
  58 |         await expect(rows, `Lỗi: Giỏ hàng phải có ${expectedCount} sản phẩm.`).toHaveCount(expectedCount);
  59 |     }
  60 | 
  61 |     // Click nút "Proceed To Checkout" trên trang Cart
  62 |     async clickProceedToCheckout() {
  63 |         await this.page.locator(this.proceedToCheckoutButton).click();
  64 |     }
  65 | 
  66 |     // Kiểm tra modal yêu cầu đăng nhập/đăng ký khi checkout chưa login
  67 |     async verifyLoginRegisterModalVisible() {
  68 |         const modal = this.page.locator(this.loginRegisterModal);
  69 |         await expect(modal).toBeVisible();
  70 |     }
  71 | 
  72 |     // Kiểm tra nút Proceed To Checkout không hiển thị (khi giỏ hàng rỗng)
  73 |     async verifyProceedToCheckoutNotVisible() {
  74 |         const btn = this.page.locator(this.proceedToCheckoutButton);
  75 |         await expect(btn).not.toBeVisible();
  76 |     }
  77 | }
  78 | 
```