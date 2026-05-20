import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test.describe('Logout Feature Tests', () => {

    test('Logout successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);

        // Bước 1: Login vào hệ thống trước
        await loginPage.gotoLoginPage();
        await loginPage.login('automationtesterpro@gmail.com', '123456');
        
        // Đảm bảo đã login thành công về trang chủ
        await expect(page).toHaveURL('https://automationexercise.com/');

        // Bước 2: Bấm nút Logout trên thanh điều hướng
        await homePage.clickLogout();

        // Bước 3: Xác nhận sau khi logout thì bị đẩy về lại trang /login
        await expect(page).toHaveURL(/.*login/);
    });
});
