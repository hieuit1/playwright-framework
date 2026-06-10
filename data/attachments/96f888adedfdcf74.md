# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web/payment.spec.ts >> Payment Feature Tests >> Complete checkout flow and download invoice successfully
- Location: tests/web/payment.spec.ts:45:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.screenshot: Test timeout of 60000ms exceeded.
Call log:
  - taking page screenshot
  - waiting for fonts to load...

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - generic [ref=e7]:
        - link "Website for automation practice":
          - /url: /
          - img "Website for automation practice"
      - list [ref=e10]:
        - listitem [ref=e11]:
          - link "Home" [ref=e12] [cursor=pointer]:
            - /url: /
            - text: Home
        - listitem [ref=e13]:
          - link " Products" [ref=e14] [cursor=pointer]:
            - /url: /products
        - listitem [ref=e15]:
          - link "Cart" [ref=e16] [cursor=pointer]:
            - /url: /view_cart
            - text: Cart
        - listitem [ref=e17]:
          - link "Logout" [ref=e18] [cursor=pointer]:
            - /url: /logout
            - text: Logout
        - listitem [ref=e19]:
          - link "Delete Account" [ref=e20] [cursor=pointer]:
            - /url: /delete_account
            - text: Delete Account
        - listitem [ref=e21]:
          - link "Test Cases" [ref=e22] [cursor=pointer]:
            - /url: /test_cases
            - text: Test Cases
        - listitem [ref=e23]:
          - link "API Testing" [ref=e24] [cursor=pointer]:
            - /url: /api_list
            - text: API Testing
        - listitem [ref=e25]:
          - link "Video Tutorials" [ref=e26] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - text: Video Tutorials
        - listitem [ref=e27]:
          - link "Contact us" [ref=e28] [cursor=pointer]:
            - /url: /contact_us
            - text: Contact us
        - listitem [ref=e29]:
          - generic [ref=e30]: Logged in as Hiếu
  - generic [ref=e32]:
    - list [ref=e34]:
      - listitem [ref=e35]:
        - link "Home" [ref=e36] [cursor=pointer]:
          - /url: /
      - listitem [ref=e37]: Payment
    - heading "Payment" [level=2] [ref=e39]
    - generic [ref=e43]:
      - generic [ref=e45]:
        - text: Name on Card
        - textbox [ref=e46]
      - generic [ref=e48]:
        - text: Card Number
        - textbox [ref=e49]
      - generic [ref=e50]:
        - generic [ref=e51]:
          - text: CVC
          - textbox "ex. 311" [ref=e52]
        - generic [ref=e53]:
          - text: Expiration
          - textbox "MM" [ref=e54]
        - textbox "YYYY" [ref=e56]
      - generic [ref=e59]: Your order has been placed successfully!
      - button "Pay and Confirm Order" [ref=e62]
  - contentinfo [ref=e63]:
    - generic [ref=e66]:
      - generic [ref=e69]: You have been successfully subscribed!
      - generic [ref=e71]:
        - heading "Subscription" [level=2] [ref=e72]
        - generic [ref=e73]:
          - textbox "Your email address" [ref=e74]
          - button [ref=e75]
          - paragraph [ref=e76]:
            - text: Get the most recent updates from
            - text: our site and be updated your self...
    - paragraph [ref=e80]: Copyright © 2021 All rights reserved
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
     |                                     ^ Error: page.screenshot: Test timeout of 60000ms exceeded.
  23 |       // Type các tham số của allure.attachment phải match với thư viện (allure-playwright)
  24 |       await allure.attachment(`Screenshot: ${name}`, screenshot, "image/png");
  25 |     }
  26 |   });
  27 | }
  28 | 
```