import { Page } from '@playwright/test';

export class ProductsPage {
    constructor(private page: Page) {}

    // Locators
    searchInput = '#search_product';
    searchButton = '#submit_search';
    searchedProductsTitle = 'h2.title.text-center'; // Cập nhật locator chính xác hơn
    productNames = '.productinfo p';

    // Methods
    async gotoProductsPage() {
        await this.page.goto('https://automationexercise.com/products');
    }

    async searchForProduct(productName: string) {
        await this.page.locator(this.searchInput).fill(productName);
        await this.page.locator(this.searchButton).click();
    }
}
