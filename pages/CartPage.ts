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
        // Đợi cho bảng giỏ hàng hiển thị
        await this.page.waitForSelector(this.cartTable);
        // Tìm và verify sản phẩm theo tên có xuất hiện trong giỏ hàng không
        const productLocator = this.page.locator(this.cartItemDescription, { hasText: productName });
        await expect(productLocator).toBeVisible();
    }

    async verifyProductQuantity(productName: string, expectedQuantity: string) {
        // Đợi bảng hiển thị
        await this.page.waitForSelector(this.cartTable);
        
        // Tìm dòng sản phẩm dựa trên tên
        const rowLocator = this.page.locator(this.cartItems).filter({ hasText: productName });
        
        // Cột quantity có class .cart_quantity và thẻ con là button
        const quantityLocator = rowLocator.locator('.cart_quantity button');
        
        // Kiểm tra xem số lượng có đúng bằng expectedQuantity không
        await expect(quantityLocator).toHaveText(expectedQuantity);
    }

    async verifyCartIsEmpty() {
        // Kiểm tra xem giỏ hàng có rỗng không (thông báo 'Cart is empty' hoặc không có item nào)
        const emptyCartMsg = this.page.locator('#empty_cart');
        const hasEmptyCartMessage = await emptyCartMsg.isVisible();
        
        if (!hasEmptyCartMessage) {
            // Hoặc kiểm tra xem có dòng dữ liệu nào trong bảng cart không
            const rows = this.page.locator(this.cartItems);
            await expect(rows, 'Lỗi: Giỏ hàng không rỗng! Chưa đăng nhập nhưng vẫn thêm được sản phẩm vào giỏ.').toHaveCount(0);
        } else {
            await expect(emptyCartMsg).toBeVisible();
        }
    }

    // Kiểm tra tổng số dòng sản phẩm trong giỏ hàng
    async verifyCartItemCount(expectedCount: number) {
        await this.page.waitForSelector(this.cartTable);
        const rows = this.page.locator(this.cartItems);
        await expect(rows, `Lỗi: Giỏ hàng phải có ${expectedCount} sản phẩm.`).toHaveCount(expectedCount);
    }

    // Click nút "Proceed To Checkout" trên trang Cart
    async clickProceedToCheckout() {
        await this.page.locator(this.proceedToCheckoutButton).click();
    }

    // Kiểm tra modal yêu cầu đăng nhập/đăng ký khi checkout chưa login
    async verifyLoginRegisterModalVisible() {
        const modal = this.page.locator(this.loginRegisterModal);
        await expect(modal).toBeVisible();
    }

    // Kiểm tra nút Proceed To Checkout không hiển thị (khi giỏ hàng rỗng)
    async verifyProceedToCheckoutNotVisible() {
        const btn = this.page.locator(this.proceedToCheckoutButton);
        await expect(btn).not.toBeVisible();
    }
}
