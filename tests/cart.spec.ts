import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { LoginPage } from '../pages/LoginPage';

test.describe('Cart Feature Tests', () => {

    test('Add product to cart without login should fail', async ({ page }) => {
        const homePage = new HomePage(page);
        const cartPage = new CartPage(page);

        // Bước 1: Vào trang home (chưa đăng nhập)
        await homePage.goto();

        // Bước 2: Tìm product và click add cart
        await homePage.addFirstProductToCart();
        await homePage.clickModalViewCart();

        // Bước 3: Vào cart check xem có product trong cart không
        await cartPage.verifyCartIsEmpty();
    });

    test('Add product from details page with custom quantity without login should fail ', async ({ page }) => {
        const homePage = new HomePage(page);
        const productDetailsPage = new ProductDetailsPage(page);
        const cartPage = new CartPage(page);

        // Bước 1: Vào trang home (chưa đăng nhập)
        await homePage.goto();

        // Bước 2: Click vào chi tiết sản phẩm đầu tiên từ trang Home
        await homePage.clickFirstViewProduct();

        // Lấy tên sản phẩm ở trang chi tiết để xác nhận (tuỳ chọn vì ta sẽ verify giỏ hàng rỗng)
        const productName = await productDetailsPage.getProductName();
        expect(productName).toBeTruthy();

        // Bước 3: Thay đổi số lượng lên 1000
        const targetQuantity = '1000';
        await productDetailsPage.setQuantity(targetQuantity);

        // Bước 4: Click thêm vào giỏ hàng
        await productDetailsPage.clickAddToCart();

        // Bước 5: Đi tới giỏ hàng từ Modal
        await productDetailsPage.clickModalViewCart();

        // Bước 6: Kiểm tra tương tự như test 1: Chưa đăng nhập thì vào cart phải KHÔNG có sản phẩm.
        // Yêu cầu "bắt lỗi" nếu vẫn thấy được sản phẩm.
        await cartPage.verifyCartIsEmpty();
    });

    test('Add multiple products to cart after login should succeed', async ({ page }) => {
        const homePage = new HomePage(page);
        const cartPage = new CartPage(page);
        const loginPage = new LoginPage(page);

        // Bước 1: Đăng nhập
        await loginPage.gotoLoginPage();
        await loginPage.login('automationtesterpro@gmail.com', '123456');

        // Đảm bảo đang ở trang chủ với danh sách sản phẩm
        await homePage.goto();

        // Bước 2: Thêm 4 sản phẩm khác nhau (index 0 → 3) từ trang Home
        const addedProductNames: string[] = [];
        const totalProducts = 4;

        for (let i = 0; i < totalProducts; i++) {
            const name = await homePage.addProductToCartByIndex(i);
            expect(name).toBeTruthy();
            if (name) addedProductNames.push(name);

            if (i < totalProducts - 1) {
                // Chưa đến sản phẩm cuối → nhấn Continue Shopping để tiếp tục
                await homePage.clickContinueShopping();
            } else {
                // Sản phẩm cuối → nhấn View Cart để vào giỏ hàng
                await homePage.clickModalViewCart();
            }
        }

        // Bước 3: Kiểm tra từng sản phẩm xuất hiện trong giỏ hàng
        for (const name of addedProductNames) {
            await cartPage.verifyProductInCart(name);
        }

        // Bước 4: Kiểm tra tổng số sản phẩm trong giỏ hàng đúng bằng 4
        await cartPage.verifyCartItemCount(totalProducts);
    });


    test('Add product from details page with custom quantity after login should succeed', async ({ page }) => {
        const homePage = new HomePage(page);
        const productDetailsPage = new ProductDetailsPage(page);
        const cartPage = new CartPage(page);
        const loginPage = new LoginPage(page);

        // Bước 1: Đăng nhập
        await loginPage.gotoLoginPage();
        await loginPage.login('automationtesterpro@gmail.com', '123456');

        // Bước 2: Click vào chi tiết sản phẩm đầu tiên từ trang Home
        await homePage.clickFirstViewProduct();

        // Lấy tên sản phẩm
        const productName = await productDetailsPage.getProductName();
        expect(productName).toBeTruthy();

        // Bước 3: Thay đổi số lượng lên 1000
        const targetQuantity = '1000';
        await productDetailsPage.setQuantity(targetQuantity);

        // Bước 4: Click thêm vào giỏ hàng
        await productDetailsPage.clickAddToCart();

        // Bước 5: Đi tới giỏ hàng từ Modal
        await productDetailsPage.clickModalViewCart();

        // Bước 6: Kiểm tra sản phẩm có trong giỏ hàng với đúng số lượng không
        if (productName) {
            await cartPage.verifyProductInCart(productName);
            // await cartPage.verifyProductQuantity(productName, targetQuantity);
        }
    });

});
