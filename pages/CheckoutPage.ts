import { Page, expect } from '@playwright/test';

export class CheckoutPage {
    constructor(private page: Page) {}

    // Locators
    deliveryAddressSection = '#address_delivery';
    billingAddressSection = '#address_invoice';
    deliveryFirstName = '#address_delivery .address_firstname';
    deliveryAddress = '#address_delivery .address_address1:nth-of-type(4)';
    deliveryCityStateZip = '#address_delivery .address_city';
    deliveryCountry = '#address_delivery .address_country_name';
    deliveryPhone = '#address_delivery .address_phone';
    commentTextArea = 'textarea.form-control';
    placeOrderButton = 'a[href="/payment"]';
    orderReviewTable = '#cart_info';

    // Methods

    // Kiểm tra trang Checkout hiển thị đầy đủ các section
    async verifyCheckoutPageVisible() {
        await expect(this.page.locator(this.deliveryAddressSection)).toBeVisible();
        await expect(this.page.locator(this.billingAddressSection)).toBeVisible();
    }

    // Kiểm tra section Delivery Address hiển thị
    async verifyDeliveryAddressVisible() {
        await expect(this.page.locator(this.deliveryAddressSection)).toBeVisible();
    }

    // Kiểm tra section Billing Address hiển thị
    async verifyBillingAddressVisible() {
        await expect(this.page.locator(this.billingAddressSection)).toBeVisible();
    }

    // Kiểm tra bảng Review Order hiển thị
    async verifyOrderReviewVisible() {
        await expect(this.page.locator(this.orderReviewTable)).toBeVisible();
    }

    // Nhập comment vào textarea trước khi Place Order
    async enterComment(comment: string) {
        await this.page.locator(this.commentTextArea).fill(comment);
    }

    // Click nút Place Order để chuyển sang trang Payment
    async clickPlaceOrder() {
        await this.page.locator(this.placeOrderButton).click();
    }
}
