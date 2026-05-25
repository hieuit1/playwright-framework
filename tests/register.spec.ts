import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { AccountInfoPage } from '../pages/AccountInfoPage';
import { registerData } from '../test-data/registerData';

test.describe('Register Feature Tests', () => {

    test('Register successfully', {
        tag: ['@register', '@priority:critical'],
        annotation: [{ type: 'severity', description: 'blocker' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const accountInfoPage = new AccountInfoPage(page);

        await registerPage.gotoRegisterPage();
        await registerPage.signup('hieu', `test${Date.now()}@gmail.com`);

        await accountInfoPage.fillAccountInformation();
        await accountInfoPage.clickCreateAccount();

        await expect(page.locator('[data-qa="account-created"]')).toContainText('Account Created!');
    });

    test('Register fails when email already exists', {
        tag: ['@register', '@priority:high'],
        annotation: [{ type: 'severity', description: 'critical' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);
        
        await registerPage.gotoRegisterPage();
        
        await registerPage.signup(
            registerData.existingUser.name, 
            registerData.existingUser.email
        );

        await expect(page.locator(registerPage.existingEmailMessage)).toBeVisible();
    });

    test('Register fails with empty name', {
        tag: ['@register', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.gotoRegisterPage();
        
        await registerPage.signup('', `test${Date.now()}@gmail.com`);

        await expect(page).toHaveURL(/.*login/);
    });

    test('Register fails with empty email', {
        tag: ['@register', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.gotoRegisterPage();
        
        await registerPage.signup('hieu', '');

        await expect(page).toHaveURL(/.*login/);
    });

    test('Register fails with empty name and email', {
        tag: ['@register', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.gotoRegisterPage();
        
        await registerPage.signup('', '');

        await expect(page).toHaveURL(/.*login/);
    });

    test('Register fails with number as name', {
        tag: ['@register', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.gotoRegisterPage();
        
        await registerPage.signup('123456789', `test${Date.now()}@gmail.com`);

        await expect(page).toHaveURL(/.*login/);
    });

    test('Register fails with incorrect email format', {
        tag: ['@register', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.gotoRegisterPage();
        
        await registerPage.signup('hieu', 'wrongemailformat.com');

        await expect(page).toHaveURL(/.*login/);
    });
});