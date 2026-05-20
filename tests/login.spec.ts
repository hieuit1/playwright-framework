import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Feature Tests', () => {

    // Positive case: Đăng nhập thành công
    test('Login successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        
        await loginPage.login('automationtesterpro@gmail.com', '123456');

        // Khi đăng nhập thành công, URL sẽ chuyển hướng về trang chủ (không còn ở trang /login)
        await expect(page).toHaveURL('https://automationexercise.com/');
    });

    // Negative case: Đăng nhập sai mật khẩu
    test('Login fails with incorrect password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        
        await loginPage.login('test@gmail.com', 'wrongpassword');

        await expect(page.locator(loginPage.errorMessage)).toBeVisible();
    });

    // Negative case: Đăng nhập với email không tồn tại
    test('Login fails with non-existing email', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        
        await loginPage.login(`notexist${Date.now()}@gmail.com`, '123456');

        await expect(page.locator(loginPage.errorMessage)).toBeVisible();
    });

    // Negative case: Đăng nhập nhưng bỏ trống cả Email và Password
    test('Login fails with empty email and password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        
        // Bỏ trống cả 2 trường
        await loginPage.login('', '');

        // Form HTML5 chặn submit, trang không chuyển hướng
        await expect(page).toHaveURL(/.*login/);
    });

    // Negative case: Đăng nhập bỏ trống trường Email
    test('Login fails with empty email', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        
        // Chỉ nhập Password, bỏ trống Email
        await loginPage.login('', '123456');

        // Form HTML5 chặn submit, trang không chuyển hướng
        await expect(page).toHaveURL(/.*login/);
    });

    // Negative case: Đăng nhập bỏ trống trường Password
    test('Login fails with empty password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        
        // Nhập Email, bỏ trống Password
        await loginPage.login('test@gmail.com', '');

        // Form HTML5 chặn submit, trang không chuyển hướng
        await expect(page).toHaveURL(/.*login/);
    });

    // Negative case: Đăng nhập với Email sai định dạng
    test('Login fails with incorrect email format', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        
        // Nhập Email không có ký tự '@'
        await loginPage.login('wrongemailformat.com', '123456');

        // Form HTML5 chặn submit, trang không chuyển hướng
        await expect(page).toHaveURL(/.*login/);
    });
});