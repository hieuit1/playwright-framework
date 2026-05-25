import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Search Product Feature Tests', () => {

    test.beforeEach(async ({ page }) => {
        const productsPage = new ProductsPage(page);
        await productsPage.gotoProductsPage();
    });

    test('Search for an existing product successfully', {
        tag: ['@search', '@priority:high'],
        annotation: [{ type: 'severity', description: 'critical' }]
    }, async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const searchKeyword = 'Blue Top';
        
        await productsPage.searchForProduct(searchKeyword);

        const titleLocator = page.locator(productsPage.searchedProductsTitle).filter({ hasText: /SEARCHED PRODUCTS/i });
        await expect(titleLocator).toBeVisible();

        const productNamesLocator = page.locator(productsPage.productNames);
        await expect(productNamesLocator).not.toHaveCount(0);
        
        const firstProductName = await productNamesLocator.first().textContent();
        expect(firstProductName?.toLowerCase()).toContain('blue');
    });

    test('Search for a non-existing product', {
        tag: ['@search', '@priority:medium'],
        annotation: [{ type: 'severity', description: 'normal' }]
    }, async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const invalidKeyword = 'InvalidProductXYZ123';
        
        await productsPage.searchForProduct(invalidKeyword);

        const titleLocator = page.locator(productsPage.searchedProductsTitle).filter({ hasText: /SEARCHED PRODUCTS/i });
        await expect(titleLocator).toBeVisible();

        const productNamesLocator = page.locator(productsPage.productNames);
        await expect(productNamesLocator).toHaveCount(0);
    });

    test('Search with empty keyword', {
        tag: ['@search', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const productsPage = new ProductsPage(page);
        
        await productsPage.searchForProduct('');

        const productNamesLocator = page.locator(productsPage.productNames);
        await expect(productNamesLocator).not.toHaveCount(0);
    });
});
