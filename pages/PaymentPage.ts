import { Page, expect } from '@playwright/test';

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
    orderSuccessText = 'Congratulations! Your order has been confirmed!';
    downloadInvoiceButton = '.btn.btn-default.check_out';
    continueButton = '[data-qa="continue-button"]';

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
    async clickDownloadInvoice(): Promise<import('@playwright/test').Download> {
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.locator(this.downloadInvoiceButton).click();
        const download = await downloadPromise;
        return download;
    }

    // Click nút Continue để quay về trang Home
    async clickContinue() {
        await this.page.locator(this.continueButton).click();
    }
}
