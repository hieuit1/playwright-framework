import { Page, expect } from '@playwright/test';

export class CartPage {
    constructor(private page: Page) {}

    // Locators
    cartTable = '#cart_info_table';
    cartItems = '#cart_info_table tbody tr';
    cartItemDescription = '.cart_description h4 a';
    proceedToCheckoutButton = 'a.check_out';
    loginRegisterModal = '#checkoutModal';

    // Methods
    async gotoCart() {
        await this.page.goto('https://automationexercise.com/view_cart');
    }

    async verifyProductInCart(productName: string) {
        await this.page.waitForSelector(this.cartTable);
        const productLocator = this.page.locator(this.cartItemDescription, { hasText: productName });
        await expect(productLocator).toBeVisible();
    }

    async verifyProductQuantity(productName: string, expectedQuantity: string) {
        await this.page.waitForSelector(this.cartTable);
        
        const rowLocator = this.page.locator(this.cartItems).filter({ hasText: productName });
        
        // Cột quantity có class .cart_quantity và thẻ con là button
        const quantityLocator = rowLocator.locator('.cart_quantity button');
        
        await expect(quantityLocator).toHaveText(expectedQuantity);
    }

    async verifyCartIsEmpty() {
        // Kiểm tra xem giỏ hàng có rỗng không (thông báo 'Cart is empty' hoặc không có item nào)
        const emptyCartMsg = this.page.locator('#empty_cart');
        const hasEmptyCartMessage = await emptyCartMsg.isVisible();
        
        if (!hasEmptyCartMessage) {
            const rows = this.page.locator(this.cartItems);
            await expect(rows, 'Lỗi: Giỏ hàng không rỗng! Chưa đăng nhập nhưng vẫn thêm được sản phẩm vào giỏ.').toHaveCount(0);
        } else {
            await expect(emptyCartMsg).toBeVisible();
        }
    }

    async verifyCartItemCount(expectedCount: number) {
        await this.page.waitForSelector(this.cartTable);
        const rows = this.page.locator(this.cartItems);
        await expect(rows, `Lỗi: Giỏ hàng phải có ${expectedCount} sản phẩm.`).toHaveCount(expectedCount);
    }

    async clickProceedToCheckout() {
        await this.page.locator(this.proceedToCheckoutButton).click();
    }

    async verifyLoginRegisterModalVisible() {
        const modal = this.page.locator(this.loginRegisterModal);
        await expect(modal).toBeVisible();
    }

    async verifyProceedToCheckoutNotVisible() {
        const btn = this.page.locator(this.proceedToCheckoutButton);
        await expect(btn).not.toBeVisible();
    }
}
