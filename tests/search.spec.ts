import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Search Product Feature Tests', () => {

    test.beforeEach(async ({ page }) => {
        const productsPage = new ProductsPage(page);
        await productsPage.gotoProductsPage();
    });

    // Positive case: Tìm kiếm sản phẩm tồn tại
    test('Search for an existing product successfully', {
        tag: ['@search', '@priority:high'],
        annotation: [{ type: 'severity', description: 'critical' }]
    }, async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const searchKeyword = 'Blue Top';
        
        await productsPage.searchForProduct(searchKeyword);

        // Kiểm tra tiêu đề hiển thị đúng. Dùng filter theo text và regex không phân biệt hoa thường (/i) 
        // để tránh lỗi do CSS text-transform in hoa.
        const titleLocator = page.locator(productsPage.searchedProductsTitle).filter({ hasText: /SEARCHED PRODUCTS/i });
        await expect(titleLocator).toBeVisible();

        // Kiểm tra kết quả tìm kiếm không bị rỗng.
        // Dùng expect().not.toHaveCount(0) để Playwright tự động chờ đến khi có kết quả thay vì đếm ngay lập tức.
        const productNamesLocator = page.locator(productsPage.productNames);
        await expect(productNamesLocator).not.toHaveCount(0);
        
        // Kiểm tra xem ít nhất một sản phẩm hiển thị có chứa từ khóa (không phân biệt hoa thường)
        const firstProductName = await productNamesLocator.first().textContent();
        expect(firstProductName?.toLowerCase()).toContain('blue');
    });

    // Negative case: Tìm kiếm sản phẩm KHÔNG tồn tại
    test('Search for a non-existing product', {
        tag: ['@search', '@priority:medium'],
        annotation: [{ type: 'severity', description: 'normal' }]
    }, async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const invalidKeyword = 'InvalidProductXYZ123';
        
        await productsPage.searchForProduct(invalidKeyword);

        // Chờ trang tải xong và hiển thị tiêu đề SEARCHED PRODUCTS
        const titleLocator = page.locator(productsPage.searchedProductsTitle).filter({ hasText: /SEARCHED PRODUCTS/i });
        await expect(titleLocator).toBeVisible();

        // Kiểm tra không có sản phẩm nào được hiển thị
        // Playwright sẽ tự động chờ để đảm bảo count là 0 (nếu có delay do load trang)
        const productNamesLocator = page.locator(productsPage.productNames);
        await expect(productNamesLocator).toHaveCount(0);
    });

    // Negative case: Tìm kiếm bằng chuỗi rỗng
    test('Search with empty keyword', {
        tag: ['@search', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const productsPage = new ProductsPage(page);
        
        // Để trống input và click tìm kiếm
        await productsPage.searchForProduct('');

        // Tùy theo logic của trang web (thông thường load lại tất cả sản phẩm)
        const productNamesLocator = page.locator(productsPage.productNames);
        // Playwright sẽ chờ để đảm bảo load được danh sách sản phẩm
        await expect(productNamesLocator).not.toHaveCount(0);
    });
});
