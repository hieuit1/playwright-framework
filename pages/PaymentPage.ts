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

  async fillPaymentDetails(cardData: CardData) {
    await this.page.locator(this.nameOnCardInput).fill(cardData.nameOnCard);
    await this.page.locator(this.cardNumberInput).fill(cardData.cardNumber);
    await this.page.locator(this.cvcInput).fill(cardData.cvc);
    await this.page.locator(this.expiryMonthInput).fill(cardData.expiryMonth);
    await this.page.locator(this.expiryYearInput).fill(cardData.expiryYear);
  }

  async clickPayAndConfirm() {
    await this.page.locator(this.payButton).click();
  }

  async verifyOrderSuccess() {
    await expect(this.page).toHaveURL(/.*payment_done.*/);
    const successMsg = this.page.locator(this.orderSuccessMessage);
    await expect(successMsg).toBeVisible();
  }

  async clickDownloadInvoice(): Promise<import("@playwright/test").Download> {
    const downloadPromise = this.page.waitForEvent("download");
    await this.page.locator(this.downloadInvoiceButton).click();
    const download = await downloadPromise;
    return download;
  }

  async clickContinue() {
    await this.page.locator(this.continueButton).click();
  }

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

  async verifyErrorMessageVisible() {
    const errorMsg = this.page.locator(this.errorAlertMessage);
    await expect(errorMsg).toBeVisible();
  }

  async verifyErrorMessageContains(text: string) {
    const errorMsg = this.page.locator(this.errorAlertMessage);
    await expect(errorMsg).toContainText(text);
  }

  async verifyPayButtonDisabled() {
    const disabledBtn = this.page.locator(this.payButtonDisabled);
    await expect(disabledBtn).toHaveCount(1);
  }

  async verifyPayButtonEnabled() {
    const enabledBtn = this.page.locator(this.payButton + ":not(:disabled)");
    await expect(enabledBtn).toHaveCount(1);
  }

  async verifyPaymentFailed() {
    await expect(this.page).not.toHaveURL(/.*payment_done.*/);
  }
}
