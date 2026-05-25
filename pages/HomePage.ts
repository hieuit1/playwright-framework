import { Page } from '@playwright/test';

export class HomePage {
    constructor(private page: Page) {}

    // Locators trên thanh điều hướng (Navbar)
    logoutLink = 'a[href="/logout"]';

    // Locators cho sản phẩm (Products)
    productNames = '.features_items .productinfo p';
    addToCartButtons = '.features_items .add-to-cart';
    modalViewCartLink = 'div.modal-content a[href="/view_cart"]';
    viewProductLinks = '.features_items .choose a';

    // Methods
    async goto() {
        await this.page.goto('https://automationexercise.com/');
    }

    async clickLogout() {
        await this.page.locator(this.logoutLink).click();
    }

    async clickFirstViewProduct() {
        await this.page.locator(this.viewProductLinks).first().click();
    }

    async addFirstProductToCart() {
        const productName = await this.page.locator(this.productNames).first().textContent();
        
        // Automation Exercise có 2 nút add-to-cart (1 hiển thị, 1 khi hover). 
        await this.page.locator(this.addToCartButtons).first().click();
        
        return productName?.trim();
    }

    async clickModalViewCart() {
        const viewCartLink = this.page.locator(this.modalViewCartLink);
        await viewCartLink.waitFor({ state: 'visible' });
        await viewCartLink.click();
    }

    async clickContinueShopping() {
        // Using role selector for robustness
        const continueBtn = this.page.getByRole('button', { name: 'Continue Shopping' });
        await continueBtn.waitFor({ state: 'visible' });
        await continueBtn.click();
        const modal = this.page.locator('#cartModal');
        await modal.waitFor({ state: 'hidden' });
    }

    async addProductToCartByIndex(index: number): Promise<string | undefined> {
        // Mỗi product card (.product-image-wrapper) chứa 2 nút add-to-cart:
        // 1 nút trong .productinfo (hiển thị bình thường) và 1 nút overlay khi hover.
        const productCard = this.page.locator('.features_items .product-image-wrapper').nth(index);
        
        await productCard.scrollIntoViewIfNeeded();
        
        const productName = await productCard.locator('.productinfo p').textContent();
        
        await productCard.hover();
        
        const overlayAddBtn = productCard.locator('.overlay-content .add-to-cart');
        await overlayAddBtn.click();
        
        return productName?.trim();
    }
}
