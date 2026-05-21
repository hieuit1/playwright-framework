import { Page, expect } from "@playwright/test";

interface CardData {
  nameOnCard: string;
  cardNumber: string;
  cvc: string;
  expiryMonth: string;
  expiryYear: string;
}

export class PaymentPage {
  constructor(private page: Page) {}

  // Locators - Sử dụng data-qa attributes cho độ ổn định cao
  nameOnCardInput = '[data-qa="name-on-card"]';
  cardNumberInput = '[data-qa="card-number"]';
  cvcInput = '[data-qa="cvc"]';
  expiryMonthInput = '[data-qa="expiry-month"]';
  expiryYearInput = '[data-qa="expiry-year"]';
  payButton = '[data-qa="pay-button"]';

  // Locators cho trang Order Confirmation (/payment_done)
  orderSuccessMessage = '[data-qa="order-placed"]';
  orderSuccessText = "Congratulations! Your order has been confirmed!";
  downloadInvoiceButton = ".btn.btn-default.check_out";
  continueButton = '[data-qa="continue-button"]';

  // Error locators for validation
  errorAlertMessage = '[data-qa="error-message"], .alert-danger, .error';
  payButtonDisabled = '[data-qa="pay-button"]:disabled';

  // Methods

  // Điền toàn bộ thông tin thẻ thanh toán
  async fillPaymentDetails(cardData: CardData) {
    await this.page.locator(this.nameOnCardInput).fill(cardData.nameOnCard);
    await this.page.locator(this.cardNumberInput).fill(cardData.cardNumber);
    await this.page.locator(this.cvcInput).fill(cardData.cvc);
    await this.page.locator(this.expiryMonthInput).fill(cardData.expiryMonth);
    await this.page.locator(this.expiryYearInput).fill(cardData.expiryYear);
  }

  // Click nút Pay and Confirm Order
  async clickPayAndConfirm() {
    await this.page.locator(this.payButton).click();
  }

  // Kiểm tra đặt hàng thành công
  async verifyOrderSuccess() {
    // Kiểm tra URL chứa /payment_done
    await expect(this.page).toHaveURL(/.*payment_done.*/);
    // Kiểm tra thông báo thành công hiển thị
    const successMsg = this.page.locator(this.orderSuccessMessage);
    await expect(successMsg).toBeVisible();
  }

  // Click nút Download Invoice và trả về thông tin download
  async clickDownloadInvoice(): Promise<import("@playwright/test").Download> {
    const downloadPromise = this.page.waitForEvent("download");
    await this.page.locator(this.downloadInvoiceButton).click();
    const download = await downloadPromise;
    return download;
  }

  // Click nút Continue để quay về trang Home
  async clickContinue() {
    await this.page.locator(this.continueButton).click();
  }

  // Điền một field trong payment form
  async fillCardField(
    field: "name" | "cardNumber" | "cvc" | "month" | "year",
    value: string,
  ) {
    switch (field) {
      case "name":
        await this.page.locator(this.nameOnCardInput).fill(value);
        break;
      case "cardNumber":
        await this.page.locator(this.cardNumberInput).fill(value);
        break;
      case "cvc":
        await this.page.locator(this.cvcInput).fill(value);
        break;
      case "month":
        await this.page.locator(this.expiryMonthInput).fill(value);
        break;
      case "year":
        await this.page.locator(this.expiryYearInput).fill(value);
        break;
    }
  }

  // Clear một field trong payment form
  async clearCardField(
    field: "name" | "cardNumber" | "cvc" | "month" | "year",
  ) {
    switch (field) {
      case "name":
        await this.page.locator(this.nameOnCardInput).clear();
        break;
      case "cardNumber":
        await this.page.locator(this.cardNumberInput).clear();
        break;
      case "cvc":
        await this.page.locator(this.cvcInput).clear();
        break;
      case "month":
        await this.page.locator(this.expiryMonthInput).clear();
        break;
      case "year":
        await this.page.locator(this.expiryYearInput).clear();
        break;
    }
  }

  // Kiểm tra error message hiển thị
  async verifyErrorMessageVisible() {
    const errorMsg = this.page.locator(this.errorAlertMessage);
    await expect(errorMsg).toBeVisible();
  }

  // Kiểm tra error message có chứa text nhất định
  async verifyErrorMessageContains(text: string) {
    const errorMsg = this.page.locator(this.errorAlertMessage);
    await expect(errorMsg).toContainText(text);
  }

  // Kiểm tra pay button disabled
  async verifyPayButtonDisabled() {
    const disabledBtn = this.page.locator(this.payButtonDisabled);
    await expect(disabledBtn).toHaveCount(1);
  }

  // Kiểm tra pay button enabled
  async verifyPayButtonEnabled() {
    const enabledBtn = this.page.locator(this.payButton + ":not(:disabled)");
    await expect(enabledBtn).toHaveCount(1);
  }

  // Kiểm tra payment thất bại (vẫn ở trang payment, không chuyển sang payment_done)
  async verifyPaymentFailed() {
    // Kiểm tra URL không chứa /payment_done
    await expect(this.page).not.toHaveURL(/.*payment_done.*/);
  }
}
