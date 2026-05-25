# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Cart Feature Tests >> Add multiple products to cart after login should succeed
- Location: tests\cart.spec.ts:60:9

# Error details

```
Error: Lỗi: Giỏ hàng phải có 4 sản phẩm.

expect(locator).toHaveCount(expected) failed

Locator:  locator('#cart_info_table tbody tr')
Expected: 4
Received: 6
Timeout:  5000ms

Call log:
  - Lỗi: Giỏ hàng phải có 4 sản phẩm. with timeout 5000ms
  - waiting for locator('#cart_info_table tbody tr')
    13 × locator resolved to 6 elements
       - unexpected value "6"

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
          - link " Logout" [ref=e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=e24]: 
            - text: Logout
        - listitem [ref=e25]:
          - link " Delete Account" [ref=e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=e27]: 
            - text: Delete Account
        - listitem [ref=e28]:
          - link " Test Cases" [ref=e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e30]: 
            - text: Test Cases
        - listitem [ref=e31]:
          - link " API Testing" [ref=e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e33]: 
            - text: API Testing
        - listitem [ref=e34]:
          - link " Video Tutorials" [ref=e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e36]: 
            - text: Video Tutorials
        - listitem [ref=e37]:
          - link " Contact us" [ref=e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e39]: 
            - text: Contact us
        - listitem [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]: 
            - text: Logged in as Hiếu
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link "Home" [ref=e48] [cursor=pointer]:
          - /url: /
      - listitem [ref=e49]: Shopping Cart
    - generic [ref=e54] [cursor=pointer]: Proceed To Checkout
    - table [ref=e56]:
      - rowgroup [ref=e57]:
        - row "Item Description Price Quantity Total" [ref=e58]:
          - cell "Item" [ref=e59]
          - cell "Description" [ref=e60]
          - cell "Price" [ref=e61]
          - cell "Quantity" [ref=e62]
          - cell "Total" [ref=e63]
          - cell [ref=e64]
      - rowgroup [ref=e65]:
        - row "Product Image Blue Top Women > Tops Rs. 500 2 Rs. 1000 " [ref=e66]:
          - cell "Product Image" [ref=e67]:
            - link "Product Image" [ref=e68] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e69]
          - cell "Blue Top Women > Tops" [ref=e70]:
            - heading "Blue Top" [level=4] [ref=e71]:
              - link "Blue Top" [ref=e72] [cursor=pointer]:
                - /url: /product_details/1
            - paragraph [ref=e73]: Women > Tops
          - cell "Rs. 500" [ref=e74]:
            - paragraph [ref=e75]: Rs. 500
          - cell "2" [ref=e76]:
            - button "2" [ref=e77] [cursor=pointer]
          - cell "Rs. 1000" [ref=e78]:
            - paragraph [ref=e79]: Rs. 1000
          - cell "" [ref=e80]:
            - generic [ref=e82] [cursor=pointer]: 
        - row "Product Image Winter Top Women > Tops Rs. 600 1 Rs. 600 " [ref=e83]:
          - cell "Product Image" [ref=e84]:
            - link "Product Image" [ref=e85] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e86]
          - cell "Winter Top Women > Tops" [ref=e87]:
            - heading "Winter Top" [level=4] [ref=e88]:
              - link "Winter Top" [ref=e89] [cursor=pointer]:
                - /url: /product_details/5
            - paragraph [ref=e90]: Women > Tops
          - cell "Rs. 600" [ref=e91]:
            - paragraph [ref=e92]: Rs. 600
          - cell "1" [ref=e93]:
            - button "1" [ref=e94] [cursor=pointer]
          - cell "Rs. 600" [ref=e95]:
            - paragraph [ref=e96]: Rs. 600
          - cell "" [ref=e97]:
            - generic [ref=e99] [cursor=pointer]: 
        - row "Product Image Summer White Top Women > Tops Rs. 400 1 Rs. 400 " [ref=e100]:
          - cell "Product Image" [ref=e101]:
            - link "Product Image" [ref=e102] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e103]
          - cell "Summer White Top Women > Tops" [ref=e104]:
            - heading "Summer White Top" [level=4] [ref=e105]:
              - link "Summer White Top" [ref=e106] [cursor=pointer]:
                - /url: /product_details/6
            - paragraph [ref=e107]: Women > Tops
          - cell "Rs. 400" [ref=e108]:
            - paragraph [ref=e109]: Rs. 400
          - cell "1" [ref=e110]:
            - button "1" [ref=e111] [cursor=pointer]
          - cell "Rs. 400" [ref=e112]:
            - paragraph [ref=e113]: Rs. 400
          - cell "" [ref=e114]:
            - generic [ref=e116] [cursor=pointer]: 
        - row "Product Image Men Tshirt Men > Tshirts Rs. 400 1 Rs. 400 " [ref=e117]:
          - cell "Product Image" [ref=e118]:
            - link "Product Image" [ref=e119] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e120]
          - cell "Men Tshirt Men > Tshirts" [ref=e121]:
            - heading "Men Tshirt" [level=4] [ref=e122]:
              - link "Men Tshirt" [ref=e123] [cursor=pointer]:
                - /url: /product_details/2
            - paragraph [ref=e124]: Men > Tshirts
          - cell "Rs. 400" [ref=e125]:
            - paragraph [ref=e126]: Rs. 400
          - cell "1" [ref=e127]:
            - button "1" [ref=e128] [cursor=pointer]
          - cell "Rs. 400" [ref=e129]:
            - paragraph [ref=e130]: Rs. 400
          - cell "" [ref=e131]:
            - generic [ref=e133] [cursor=pointer]: 
        - row "Product Image Sleeveless Dress Women > Dress Rs. 1000 1 Rs. 1000 " [ref=e134]:
          - cell "Product Image" [ref=e135]:
            - link "Product Image" [ref=e136] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e137]
          - cell "Sleeveless Dress Women > Dress" [ref=e138]:
            - heading "Sleeveless Dress" [level=4] [ref=e139]:
              - link "Sleeveless Dress" [ref=e140] [cursor=pointer]:
                - /url: /product_details/3
            - paragraph [ref=e141]: Women > Dress
          - cell "Rs. 1000" [ref=e142]:
            - paragraph [ref=e143]: Rs. 1000
          - cell "1" [ref=e144]:
            - button "1" [ref=e145] [cursor=pointer]
          - cell "Rs. 1000" [ref=e146]:
            - paragraph [ref=e147]: Rs. 1000
          - cell "" [ref=e148]:
            - generic [ref=e150] [cursor=pointer]: 
        - row "Product Image Stylish Dress Women > Dress Rs. 1500 1 Rs. 1500 " [ref=e151]:
          - cell "Product Image" [ref=e152]:
            - link "Product Image" [ref=e153] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e154]
          - cell "Stylish Dress Women > Dress" [ref=e155]:
            - heading "Stylish Dress" [level=4] [ref=e156]:
              - link "Stylish Dress" [ref=e157] [cursor=pointer]:
                - /url: /product_details/4
            - paragraph [ref=e158]: Women > Dress
          - cell "Rs. 1500" [ref=e159]:
            - paragraph [ref=e160]: Rs. 1500
          - cell "1" [ref=e161]:
            - button "1" [ref=e162] [cursor=pointer]
          - cell "Rs. 1500" [ref=e163]:
            - paragraph [ref=e164]: Rs. 1500
          - cell "" [ref=e165]:
            - generic [ref=e167] [cursor=pointer]: 
  - generic:
    - insertion:
      - generic:
        - iframe
  - contentinfo [ref=e168]:
    - generic [ref=e173]:
      - heading "Subscription" [level=2] [ref=e174]
      - generic [ref=e175]:
        - textbox "Your email address" [ref=e176]
        - button "" [ref=e177] [cursor=pointer]:
          - generic [ref=e178]: 
        - paragraph [ref=e179]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e183]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e184]:
    - iframe [ref=e187]:
      - generic [active] [ref=f66e1]:
        - link [ref=f66e8] [cursor=pointer]:
          - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CLkCk7acTaqXJE6eHid4Pt7jMkAb337uehwG_kbCPxRXa2R4QASD9tJ6VAWDBtfoNoAGpi_iGKcgBAqkC4BlohN3bxD2oAwHIA8kEqgTuAU_QqZxC5aw0jbUTwRcE97ccnvdC57ZYb16Q0UBn8ZQktset6_HPSF2Rn4XwIXSrZBTTPhHCFcIkHLJul_k59fIM4CAPt5LoN3qTrdl3ez7PjYJ_NDy4YfpZhHqFprvql3TOYJTY-14GQXJDnRRusoE3Xh4lH-YcC73sDm1WegHbBWZ-I_rlMBS486WmGT-mmxqKQW27Vm4CIDCvb12em8QyXdOcHtsZjmAh6qiVqw2ZdBt9A4degrad6SvwVTR_--LyJ5rhAyCdhfWT2pio5wCdfqtakW6VZtC5qvcZNoIzXGqwxEusER4efBY6IyvABOScvtP4BYgF4sCJyVigBgKAB6TH5ZYdqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggxCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljp1_PoptOUA7EJkwywnDySlaWACgGYCwHICwGiDAOQAQGqDQJWTsgNAeoNEwjw-fPoptOUAxWnQ8IFHTccE2LwDQKIDgnYEwPQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC_FsYAiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI5fPz6KbTlAMVp0PCBR03HBNiEAEYASAAEgLtyfD_BwE&num=1&cid=CAQS9AEABaugfdMj8unHwxJG5IBKXfrA10CIHedLqLls-9QYLpq8sZFbyYsPAupvNr6wIlxAaSC5Ao_nKJxbWNnXlGQg2NfH4cxCs8m1mHM8LMKo8ANBxZQgjVeyve-CB8Wt34EUCJZWpu19hn-81d8gT7pDsU_p0GbaOUrbKZ_uGwPQGIwq1gmxz8Y7O-qoHgrd_ilRt0e7LFDsMV4AgNJo3dsGKt09Hb1XyCxCZcIKhjk5JNGs1EHaNuSI3ZuoYQAAeewOAvy6YwJlOi1DRj5_rmKkTHQis928-T4kft5Il70RMNpcXuPoe3cpSoo9vOIRkkldYGrbGAE&sig=AOD64_1X8u8CT_gcu17zadMdqcQ16JO2Sw&client=ca-pub-1677597403311019&rf=1&nb=9&adurl=https://nhathuoclongchau.com.vn/thuc-pham-chuc-nang/sua-meiji-meibalance-huong-ngu-coc-24-hop-x-125-ml.html%3Futm_source%3DGoogle%26utm_medium%3DCPM%26utm_campaign%3DMeiji-T4-2026%26utm_term%3DGDN%26utm_content%3D806007630132%26gad_source%3D5%26gad_campaignid%3D23775567970%26gclid%3DEAIaIQobChMI5fPz6KbTlAMVp0PCBR03HBNiEAEYASAAEgLtyfD_BwE
          - img [ref=f66e9]
        - img [ref=f66e13] [cursor=pointer]
        - button [ref=f66e15] [cursor=pointer]:
          - img [ref=f66e16]
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
  48 |             await expect(rows, 'Lỗi: Giỏ hàng không rỗng! Chưa đăng nhập nhưng vẫn thêm được sản phẩm vào giỏ.').toHaveCount(0);
  49 |         } else {
  50 |             await expect(emptyCartMsg).toBeVisible();
  51 |         }
  52 |     }
  53 | 
  54 |     // Kiểm tra tổng số dòng sản phẩm trong giỏ hàng
  55 |     async verifyCartItemCount(expectedCount: number) {
  56 |         await this.page.waitForSelector(this.cartTable);
  57 |         const rows = this.page.locator(this.cartItems);
> 58 |         await expect(rows, `Lỗi: Giỏ hàng phải có ${expectedCount} sản phẩm.`).toHaveCount(expectedCount);
     |                                                                                ^ Error: Lỗi: Giỏ hàng phải có 4 sản phẩm.
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