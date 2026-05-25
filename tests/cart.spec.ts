import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { LoginPage } from '../pages/LoginPage';

test.describe('Cart Feature Tests', () => {

    test('Add product to cart without login should fail', {
        tag: ['@cart', '@priority:high'],
        annotation: [{ type: 'severity', description: 'critical' }]
    }, async ({ page }) => {
        const homePage = new HomePage(page);
        const cartPage = new CartPage(page);

        await homePage.goto();

        await homePage.addFirstProductToCart();
        await homePage.clickModalViewCart();

        await cartPage.verifyCartIsEmpty();
    });

    test('Add product from details page with custom quantity without login should fail ', {
        tag: ['@cart', '@priority:medium'],
        annotation: [{ type: 'severity', description: 'normal' }]
    }, async ({ page }) => {
        const homePage = new HomePage(page);
        const productDetailsPage = new ProductDetailsPage(page);
        const cartPage = new CartPage(page);

        await homePage.goto();

        await homePage.clickFirstViewProduct();
        const productName = await productDetailsPage.getProductName();
        expect(productName).toBeTruthy();

        const targetQuantity = '1000';
        await productDetailsPage.setQuantity(targetQuantity);

        await productDetailsPage.clickAddToCart()

        await productDetailsPage.clickModalViewCart();

        await cartPage.verifyCartIsEmpty();
    });

    test('Add multiple products to cart after login should succeed', {
        tag: ['@cart', '@priority:high'],
        annotation: [{ type: 'severity', description: 'critical' }]
    }, async ({ page }) => {
        const homePage = new HomePage(page);
        const cartPage = new CartPage(page);
        const loginPage = new LoginPage(page);

        await loginPage.gotoLoginPage();
        await loginPage.login('automationtesterpro@gmail.com', '123456');

        await homePage.goto();

        const addedProductNames: string[] = [];
        const totalProducts = 4;

        for (let i = 0; i < totalProducts; i++) {
            const name = await homePage.addProductToCartByIndex(i);
            expect(name).toBeTruthy();
            if (name) addedProductNames.push(name);

            if (i < totalProducts - 1) {
                await homePage.clickContinueShopping();
            } else {
                await homePage.clickModalViewCart();
            }
        }

        for (const name of addedProductNames) {
            await cartPage.verifyProductInCart(name);
        }

        await cartPage.verifyCartItemCount(totalProducts);
    });


    test('Add product from details page with custom quantity after login should succeed', {
        tag: ['@cart', '@priority:medium'],
        annotation: [{ type: 'severity', description: 'normal' }]
    }, async ({ page }) => {
        const homePage = new HomePage(page);
        const productDetailsPage = new ProductDetailsPage(page);
        const cartPage = new CartPage(page);
        const loginPage = new LoginPage(page);

        await loginPage.gotoLoginPage();
        await loginPage.login('automationtesterpro@gmail.com', '123456');

        await homePage.clickFirstViewProduct();

        const productName = await productDetailsPage.getProductName();
        expect(productName).toBeTruthy();

        const targetQuantity = '1000';
        await productDetailsPage.setQuantity(targetQuantity);

        await productDetailsPage.clickAddToCart();

        await productDetailsPage.clickModalViewCart();

        if (productName) {
            await cartPage.verifyProductInCart(productName);
            // await cartPage.verifyProductQuantity(productName, targetQuantity);
        }
    });

});
