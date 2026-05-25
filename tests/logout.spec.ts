import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test.describe('Logout Feature Tests', () => {

    test('Logout successfully', {
        tag: ['@logout', '@priority:high'],
        annotation: [{ type: 'severity', description: 'critical' }]
    }, async ({ page }) => {
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);

        await loginPage.gotoLoginPage();
        await loginPage.login('automationtesterpro@gmail.com', '123456');
        
        await expect(page).toHaveURL('https://automationexercise.com/');

        await homePage.clickLogout();

        await expect(page).toHaveURL(/.*login/);
    });
});
