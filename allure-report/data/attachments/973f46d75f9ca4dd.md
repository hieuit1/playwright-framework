# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.ts >> E2E Complete User Journey Tests >> complete journey from search to successful order
- Location: tests\e2e.spec.ts:11:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('[data-qa="name-on-card"]')

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
          - cell [ref=e104]:
            - link [ref=e105] [cursor=pointer]:
              - /url: ""
              - img [ref=e106]
          - cell [ref=e107]:
            - heading [level=4] [ref=e108]:
              - link [ref=e109] [cursor=pointer]:
                - /url: /product_details/5
                - text: Winter Top
            - paragraph [ref=e110]: Women > Tops
          - cell [ref=e111]:
            - paragraph [ref=e112]: Rs. 600
          - cell [ref=e113]:
            - button [ref=e114] [cursor=pointer]: "1"
          - cell [ref=e115]:
            - paragraph [ref=e116]: Rs. 600
        - row [ref=e117]:
          - cell [ref=e118]:
            - link [ref=e119] [cursor=pointer]:
              - /url: ""
              - img [ref=e120]
          - cell [ref=e121]:
            - heading [level=4] [ref=e122]:
              - link [ref=e123] [cursor=pointer]:
                - /url: /product_details/6
                - text: Summer White Top
            - paragraph [ref=e124]: Women > Tops
          - cell [ref=e125]:
            - paragraph [ref=e126]: Rs. 400
          - cell [ref=e127]:
            - button [ref=e128] [cursor=pointer]: "1"
          - cell [ref=e129]:
            - paragraph [ref=e130]: Rs. 400
        - row [ref=e131]:
          - cell [ref=e132]
          - cell [ref=e133]
          - cell [ref=e134]:
            - heading [level=4] [ref=e135]: Total Amount
          - cell [ref=e136]:
            - paragraph [ref=e137]: Rs. 1500
    - generic [ref=e138]:
      - generic [ref=e139]: If you would like to add a comment about your order, please write it in the field below.
      - textbox [ref=e140]: Please handle with care - fragile items
    - link [ref=e142] [cursor=pointer]:
      - /url: /payment
      - text: Place Order
  - contentinfo [ref=e143]:
    - generic [ref=e148]:
      - heading [level=2] [ref=e149]: Subscription
      - generic [ref=e150]:
        - textbox [ref=e151]:
          - /placeholder: Your email address
        - button [ref=e152] [cursor=pointer]:
          - generic [ref=e153]: 
        - paragraph [ref=e154]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e158]: Copyright © 2021 All rights reserved
  - insertion [ref=e160]:
    - iframe [ref=e162]:
      
  - insertion [ref=e163]:
    - iframe [ref=e166]:
      - generic [active] [ref=f110e1]:
        - generic [ref=f110e3]:
          - link:
            - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CVoLpdKcTaoXxFJCy29gPoZnD4AX337uehwGXkbCPxRXa2R4QASD9tJ6VAWDBtfoNoAGpi_iGKcgBAqkC4BlohN3bxD2oAwHIA8kEqgTzAU_QMoCXCVXrD-2B1Gtjf8jJp9tnrMVlX6a1iy5ObjLVC_DsAUSH37AO3s3NXOHcREX3_3M4kiZAb6yTO9TjVLzO8yTckmjUCSTwXUMDGpT7DdNKq4qNfO6-pT2ydhaFOgKpM251aX3kqd0be1MpND5MmckyIPXSRmnvkDw2HZmJ8ZHgD-ddsdfeVFBmwFXPQzerEsk_GQPHqqQMCf2tn3vsT5w7RjKYvKebEWiEpf-VyBJqWOv5znlk5egxKIeCiCzRN--2QW4Ia_FT3lSSSSHdvLwVUFHi8LBUxkb_OSc15v6eyOguFT9xMvyV5ZBUKFguL8AE5Jy-0_gFiAXiwInJWKAGAoAHpMfllh2oB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDEIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WJPUm6-m05QDsQmTDLCcPJKVpYAKAZgLAcgLAaIMA5ABAaoNAlZOyA0B6g0TCKuBnK-m05QDFRDZFgUdocwQXPANAogOCdgTA9AVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgLIURgCIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMIhfubr6bTlAMVENkWBR2hzBBcEAEYASAAEgIF3PD_BwE&num=1&cid=CAQS9AEABaugfUnEZACVbpTHuokwEzFPf5UjbseGQ-PWdsAHGk-EPEf-19eXvrXPgCQlSjMjAWAvVd_mjzO0KhKxYA-H0r6jo0_VCDyeV59jq0L4WtGJTFva8At8Km2FHxGzkNXZ7aq7NQMFinm89uI7TMEvbvdyOyhNCpidxV1YwFEl_DO9mdF3eWo7hy8BpCnQkSbvQ7nG-sI9pe2qyBkhdWh8_qLtZcwl3YsmpE1f0-OOtXDWubDxf7ec4o058sQaPobbgF-woXAlL1N2Be0IMl_Ihti0aiDywB4wwgBszQaankDFj3LCl7y2191iB1louuia6dT1GAE&sig=AOD64_3LGO0sx8ba1SWU9D4pNvcHXfm-hw&client=ca-pub-1677597403311019&rf=2&nb=2&adurl=https://nhathuoclongchau.com.vn/thuc-pham-chuc-nang/sua-meiji-meibalance-huong-ngu-coc-24-hop-x-125-ml.html%3Futm_source%3DGoogle%26utm_medium%3DCPM%26utm_campaign%3DMeiji-T4-2026%26utm_term%3DGDN%26utm_content%3D806007630129%26gad_source%3D5%26gad_campaignid%3D23775567970%26gclid%3DEAIaIQobChMIhfubr6bTlAMVENkWBR2hzBBcEAEYASAAEgIF3PD_BwE
          - img [ref=f110e7] [cursor=pointer]
          - button [ref=f110e9] [cursor=pointer]:
            - img [ref=f110e10]
        - iframe
  - text: 
```

# Test source

```ts
  1   | import { Page, expect } from "@playwright/test";
  2   | 
  3   | interface CardData {
  4   |   nameOnCard: string;
  5   |   cardNumber: string;
  6   |   cvc: string;
  7   |   expiryMonth: string;
  8   |   expiryYear: string;
  9   | }
  10  | 
  11  | export class PaymentPage {
  12  |   constructor(private page: Page) {}
  13  | 
  14  |   // Locators - Sử dụng data-qa attributes cho độ ổn định cao
  15  |   nameOnCardInput = '[data-qa="name-on-card"]';
  16  |   cardNumberInput = '[data-qa="card-number"]';
  17  |   cvcInput = '[data-qa="cvc"]';
  18  |   expiryMonthInput = '[data-qa="expiry-month"]';
  19  |   expiryYearInput = '[data-qa="expiry-year"]';
  20  |   payButton = '[data-qa="pay-button"]';
  21  | 
  22  |   // Locators cho trang Order Confirmation (/payment_done)
  23  |   orderSuccessMessage = '[data-qa="order-placed"]';
  24  |   orderSuccessText = "Congratulations! Your order has been confirmed!";
  25  |   downloadInvoiceButton = ".btn.btn-default.check_out";
  26  |   continueButton = '[data-qa="continue-button"]';
  27  | 
  28  |   // Error locators for validation
  29  |   errorAlertMessage = '[data-qa="error-message"], .alert-danger, .error';
  30  |   payButtonDisabled = '[data-qa="pay-button"]:disabled';
  31  | 
  32  |   // Methods
  33  | 
  34  |   // Điền toàn bộ thông tin thẻ thanh toán
  35  |   async fillPaymentDetails(cardData: CardData) {
> 36  |     await this.page.locator(this.nameOnCardInput).fill(cardData.nameOnCard);
      |                                                   ^ Error: locator.fill: Test timeout of 60000ms exceeded.
  37  |     await this.page.locator(this.cardNumberInput).fill(cardData.cardNumber);
  38  |     await this.page.locator(this.cvcInput).fill(cardData.cvc);
  39  |     await this.page.locator(this.expiryMonthInput).fill(cardData.expiryMonth);
  40  |     await this.page.locator(this.expiryYearInput).fill(cardData.expiryYear);
  41  |   }
  42  | 
  43  |   // Click nút Pay and Confirm Order
  44  |   async clickPayAndConfirm() {
  45  |     await this.page.locator(this.payButton).click();
  46  |   }
  47  | 
  48  |   // Kiểm tra đặt hàng thành công
  49  |   async verifyOrderSuccess() {
  50  |     // Kiểm tra URL chứa /payment_done
  51  |     await expect(this.page).toHaveURL(/.*payment_done.*/);
  52  |     // Kiểm tra thông báo thành công hiển thị
  53  |     const successMsg = this.page.locator(this.orderSuccessMessage);
  54  |     await expect(successMsg).toBeVisible();
  55  |   }
  56  | 
  57  |   // Click nút Download Invoice và trả về thông tin download
  58  |   async clickDownloadInvoice(): Promise<import("@playwright/test").Download> {
  59  |     const downloadPromise = this.page.waitForEvent("download");
  60  |     await this.page.locator(this.downloadInvoiceButton).click();
  61  |     const download = await downloadPromise;
  62  |     return download;
  63  |   }
  64  | 
  65  |   // Click nút Continue để quay về trang Home
  66  |   async clickContinue() {
  67  |     await this.page.locator(this.continueButton).click();
  68  |   }
  69  | 
  70  |   // Điền một field trong payment form
  71  |   async fillCardField(
  72  |     field: "name" | "cardNumber" | "cvc" | "month" | "year",
  73  |     value: string,
  74  |   ) {
  75  |     switch (field) {
  76  |       case "name":
  77  |         await this.page.locator(this.nameOnCardInput).fill(value);
  78  |         break;
  79  |       case "cardNumber":
  80  |         await this.page.locator(this.cardNumberInput).fill(value);
  81  |         break;
  82  |       case "cvc":
  83  |         await this.page.locator(this.cvcInput).fill(value);
  84  |         break;
  85  |       case "month":
  86  |         await this.page.locator(this.expiryMonthInput).fill(value);
  87  |         break;
  88  |       case "year":
  89  |         await this.page.locator(this.expiryYearInput).fill(value);
  90  |         break;
  91  |     }
  92  |   }
  93  | 
  94  |   // Clear một field trong payment form
  95  |   async clearCardField(
  96  |     field: "name" | "cardNumber" | "cvc" | "month" | "year",
  97  |   ) {
  98  |     switch (field) {
  99  |       case "name":
  100 |         await this.page.locator(this.nameOnCardInput).clear();
  101 |         break;
  102 |       case "cardNumber":
  103 |         await this.page.locator(this.cardNumberInput).clear();
  104 |         break;
  105 |       case "cvc":
  106 |         await this.page.locator(this.cvcInput).clear();
  107 |         break;
  108 |       case "month":
  109 |         await this.page.locator(this.expiryMonthInput).clear();
  110 |         break;
  111 |       case "year":
  112 |         await this.page.locator(this.expiryYearInput).clear();
  113 |         break;
  114 |     }
  115 |   }
  116 | 
  117 |   // Kiểm tra error message hiển thị
  118 |   async verifyErrorMessageVisible() {
  119 |     const errorMsg = this.page.locator(this.errorAlertMessage);
  120 |     await expect(errorMsg).toBeVisible();
  121 |   }
  122 | 
  123 |   // Kiểm tra error message có chứa text nhất định
  124 |   async verifyErrorMessageContains(text: string) {
  125 |     const errorMsg = this.page.locator(this.errorAlertMessage);
  126 |     await expect(errorMsg).toContainText(text);
  127 |   }
  128 | 
  129 |   // Kiểm tra pay button disabled
  130 |   async verifyPayButtonDisabled() {
  131 |     const disabledBtn = this.page.locator(this.payButtonDisabled);
  132 |     await expect(disabledBtn).toHaveCount(1);
  133 |   }
  134 | 
  135 |   // Kiểm tra pay button enabled
  136 |   async verifyPayButtonEnabled() {
```