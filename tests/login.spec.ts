import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Feature Tests', () => {

    // Positive case: Đăng nhập thành công
    test('Login successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        
        await loginPage.login('test@gmail.com', '123456');

        await expect(page).toHaveURL(/.*login/);
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
});