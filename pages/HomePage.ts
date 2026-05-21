import { Page } from '@playwright/test';

export class HomePage {
    constructor(private page: Page) {}

    // Locators trên thanh điều hướng (Navbar)
    logoutLink = 'a[href="/logout"]'; // Nút Logout

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
        // Lấy tên của sản phẩm đầu tiên để trả về phục vụ việc verify
        const productName = await this.page.locator(this.productNames).first().textContent();
        
        // Automation Exercise có 2 nút add-to-cart (1 hiển thị, 1 khi hover). 
        // Lấy nút đầu tiên tương ứng với sản phẩm đầu tiên.
        await this.page.locator(this.addToCartButtons).first().click();
        
        return productName?.trim();
    }

    async clickModalViewCart() {
        // Wait for modal to appear and click View Cart button
        const viewCartLink = this.page.locator(this.modalViewCartLink);
        await viewCartLink.waitFor({ state: 'visible' });
        await viewCartLink.click();
    }

    async clickContinueShopping() {
        // Using role selector for robustness
        const continueBtn = this.page.getByRole('button', { name: 'Continue Shopping' });
        await continueBtn.waitFor({ state: 'visible' });
        await continueBtn.click();
        // Wait for the add-to-cart modal to disappear before next actions
        const modal = this.page.locator('#cartModal');
        await modal.waitFor({ state: 'hidden' });
    }

    // Thêm sản phẩm theo vị trí index (0-based) vào giỏ hàng
    async addProductToCartByIndex(index: number): Promise<string | undefined> {
        // Mỗi product card (.product-image-wrapper) chứa 2 nút add-to-cart:
        // 1 nút trong .productinfo (hiển thị bình thường) và 1 nút overlay khi hover.
        // Ta cần hover vào card rồi click nút overlay.
        const productCard = this.page.locator('.features_items .product-image-wrapper').nth(index);
        
        // Cuộn đến product card để đảm bảo nó nằm trong viewport
        await productCard.scrollIntoViewIfNeeded();
        
        // Lấy tên sản phẩm từ .productinfo p bên trong card
        const productName = await productCard.locator('.productinfo p').textContent();
        
        // Hover vào card để nút overlay hiện ra
        await productCard.hover();
        
        // Click nút add-to-cart overlay (nút nằm trong .overlay-content)
        const overlayAddBtn = productCard.locator('.overlay-content .add-to-cart');
        await overlayAddBtn.click();
        
        return productName?.trim();
    }
}
