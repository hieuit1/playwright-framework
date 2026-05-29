# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web/payment.spec.ts >> Payment Feature Tests >> Complete checkout flow and download invoice successfully
- Location: tests/web/payment.spec.ts:56:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.screenshot: Target page, context or browser has been closed
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e8] [cursor=pointer]:
        - /url: /
        - img [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link [ref=e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=e24]: 
            - text: Logout
        - listitem [ref=e25]:
          - link [ref=e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=e27]: 
            - text: Delete Account
        - listitem [ref=e28]:
          - link [ref=e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e30]: 
            - text: Test Cases
        - listitem [ref=e31]:
          - link [ref=e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e33]: 
            - text: API Testing
        - listitem [ref=e34]:
          - link [ref=e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e36]: 
            - text: Video Tutorials
        - listitem [ref=e37]:
          - link [ref=e38] [cursor=pointer]:
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
        - link [ref=e48] [cursor=pointer]:
          - /url: /
          - text: Home
      - listitem [ref=e49]: Checkout
    - heading [level=2] [ref=e51]: Address Details
    - generic [ref=e53]:
      - list [ref=e55]:
        - listitem [ref=e56]:
          - heading [level=3] [ref=e57]: Your delivery address
        - listitem [ref=e58]: . Hiếu TX
        - listitem [ref=e59]: hieu
        - listitem [ref=e60]: dannang
        - listitem [ref=e61]: as
        - listitem [ref=e62]: da nang a d
        - listitem [ref=e63]: United States
        - listitem [ref=e64]: a
      - list [ref=e66]:
        - listitem [ref=e67]:
          - heading [level=3] [ref=e68]: Your billing address
        - listitem [ref=e69]: . Hiếu TX
        - listitem [ref=e70]: hieu
        - listitem [ref=e71]: dannang
        - listitem [ref=e72]: as
        - listitem [ref=e73]: da nang a d
        - listitem [ref=e74]: United States
        - listitem [ref=e75]: a
    - heading [level=2] [ref=e77]: Review Your Order
    - table [ref=e79]:
      - rowgroup [ref=e80]:
        - row [ref=e81]:
          - cell [ref=e82]: Item
          - cell [ref=e83]: Description
          - cell [ref=e84]: Price
          - cell [ref=e85]: Quantity
          - cell [ref=e86]: Total
          - cell [ref=e87]
      - rowgroup [ref=e88]:
        - row [ref=e89]:
          - cell [ref=e90]:
            - link [ref=e91] [cursor=pointer]:
              - /url: ""
              - img [ref=e92]
          - cell [ref=e93]:
            - heading [level=4] [ref=e94]:
              - link [ref=e95] [cursor=pointer]:
                - /url: /product_details/1
                - text: Blue Top
            - paragraph [ref=e96]: Women > Tops
          - cell [ref=e97]:
            - paragraph [ref=e98]: Rs. 500
          - cell [ref=e99]:
            - button [ref=e100] [cursor=pointer]: "1"
          - cell [ref=e101]:
            - paragraph [ref=e102]: Rs. 500
        - row [ref=e103]:
          - cell [ref=e104]
          - cell [ref=e105]
          - cell [ref=e106]:
            - heading [level=4] [ref=e107]: Total Amount
          - cell [ref=e108]:
            - paragraph [ref=e109]: Rs. 500
    - generic [ref=e110]:
      - generic [ref=e111]: If you would like to add a comment about your order, please write it in the field below.
      - textbox [ref=e112]
    - link [ref=e114] [cursor=pointer]:
      - /url: /payment
      - text: Place Order
  - contentinfo [ref=e115]:
    - generic [ref=e120]:
      - heading [level=2] [ref=e121]: Subscription
      - generic [ref=e122]:
        - textbox [ref=e123]:
          - /placeholder: Your email address
        - button [ref=e124] [cursor=pointer]:
          - generic [ref=e125]: 
        - paragraph [ref=e126]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e130]: Copyright © 2021 All rights reserved
  - link [ref=e131] [cursor=pointer]:
    - /url: "#top"
    - generic [ref=e132]: 
```

# Test source

```ts
  1  | import { Page } from "@playwright/test";
  2  | import { allure } from "allure-playwright";
  3  | 
  4  | /**
  5  |  * Helper: chụp screenshot + đính vào Allure report ở từng step.
  6  |  *
  7  |  * Cách dùng:
  8  |  *   await step(page, 'Mở trang login', async () => {
  9  |  *       await page.goto('https://www.saucedemo.com');
  10 |  *   });
  11 |  */
  12 | export async function step(
  13 |   page: Page,
  14 |   name: string,
  15 |   action: () => Promise<void>,
  16 | ): Promise<void> {
  17 |   await allure.step(name, async () => {
  18 |     try {
  19 |       await action();
  20 |     } finally {
  21 |       // Luôn chụp screenshot sau mỗi step, ngay cả khi có lỗi
> 22 |       const screenshot = await page.screenshot({ fullPage: false });
     |                                     ^ Error: page.screenshot: Target page, context or browser has been closed
  23 |       // Type các tham số của allure.attachment phải match với thư viện (allure-playwright)
  24 |       await allure.attachment(`Screenshot: ${name}`, screenshot, "image/png");
  25 |     }
  26 |   });
  27 | }
  28 | 
```