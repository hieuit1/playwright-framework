import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { AccountInfoPage } from '../pages/AccountInfoPage';
import { registerData } from '../test-data/registerData';
import { allure } from 'allure-playwright';
import { step } from './helpers/stepWithScreenshot';

test.describe('Register Feature Tests', () => {

    test('Register successfully', {
        tag: ['@register', '@priority:critical'],
        annotation: [{ type: 'severity', description: 'blocker' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const accountInfoPage = new AccountInfoPage(page);

        await allure.epic('Authentication');
        await allure.feature('Register Flow');
        await allure.story('Valid Registration');

        await step(page, '1. Đi tới trang Đăng ký', async () => {
            await registerPage.gotoRegisterPage();
        });

        await step(page, '2. Nhập Name và Email hợp lệ', async () => {
            await registerPage.signup('hieu', `test${Date.now()}@gmail.com`);
        });

        await step(page, '3. Điền thông tin tài khoản', async () => {
            await accountInfoPage.fillAccountInformation();
        });

        await step(page, '4. Click tạo tài khoản', async () => {
            await accountInfoPage.clickCreateAccount();
        });

        await step(page, '5. Kiểm tra thông báo tạo tài khoản thành công', async () => {
            await expect(page.locator('[data-qa="account-created"]')).toContainText('Account Created!');
        });
    });

    test('Register fails when email already exists', {
        tag: ['@register', '@priority:high'],
        annotation: [{ type: 'severity', description: 'critical' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);
        
        await allure.epic('Authentication');
        await allure.feature('Register Flow');
        await allure.story('Existing Email');

        await step(page, '1. Đi tới trang Đăng ký', async () => {
            await registerPage.gotoRegisterPage();
        });
        
        await step(page, '2. Nhập Email đã tồn tại', async () => {
            await registerPage.signup(
                registerData.existingUser.name, 
                registerData.existingUser.email
            );
        });

        await step(page, '3. Kiểm tra thông báo lỗi email đã tồn tại', async () => {
            await expect(page.locator(registerPage.existingEmailMessage)).toBeVisible();
        });
    });

    test('Register fails with empty name', {
        tag: ['@register', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);

        await allure.epic('Authentication');
        await allure.feature('Register Flow');
        await allure.story('Empty Name');

        await step(page, '1. Đi tới trang Đăng ký', async () => {
            await registerPage.gotoRegisterPage();
        });
        
        await step(page, '2. Bỏ trống Name', async () => {
            await registerPage.signup('', `test${Date.now()}@gmail.com`);
        });

        await step(page, '3. Kiểm tra form chặn submit và không chuyển hướng', async () => {
            await expect(page).toHaveURL(/.*login/);
        });
    });

    test('Register fails with empty email', {
        tag: ['@register', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);

        await allure.epic('Authentication');
        await allure.feature('Register Flow');
        await allure.story('Empty Email');

        await step(page, '1. Đi tới trang Đăng ký', async () => {
            await registerPage.gotoRegisterPage();
        });
        
        await step(page, '2. Bỏ trống Email', async () => {
            await registerPage.signup('hieu', '');
        });

        await step(page, '3. Kiểm tra form chặn submit và không chuyển hướng', async () => {
            await expect(page).toHaveURL(/.*login/);
        });
    });

    test('Register fails with empty name and email', {
        tag: ['@register', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);

        await allure.epic('Authentication');
        await allure.feature('Register Flow');
        await allure.story('Empty Name and Email');

        await step(page, '1. Đi tới trang Đăng ký', async () => {
            await registerPage.gotoRegisterPage();
        });
        
        await step(page, '2. Bỏ trống cả Name và Email', async () => {
            await registerPage.signup('', '');
        });

        await step(page, '3. Kiểm tra form chặn submit và không chuyển hướng', async () => {
            await expect(page).toHaveURL(/.*login/);
        });
    });

    test('Register fails with number as name', {
        tag: ['@register', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);

        await allure.epic('Authentication');
        await allure.feature('Register Flow');
        await allure.story('Number as Name');

        await step(page, '1. Đi tới trang Đăng ký', async () => {
            await registerPage.gotoRegisterPage();
        });
        
        await step(page, '2. Nhập số vào trường Name', async () => {
            await registerPage.signup('123456789', `test${Date.now()}@gmail.com`);
        });

        await step(page, '3. Kiểm tra form chặn submit và không chuyển hướng', async () => {
            await expect(page).toHaveURL(/.*login/);
        });
    });

    test('Register fails with incorrect email format', {
        tag: ['@register', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);

        await allure.epic('Authentication');
        await allure.feature('Register Flow');
        await allure.story('Incorrect Email Format');

        await step(page, '1. Đi tới trang Đăng ký', async () => {
            await registerPage.gotoRegisterPage();
        });
        
        await step(page, '2. Nhập Email sai định dạng', async () => {
            await registerPage.signup('hieu', 'wrongemailformat.com');
        });

        await step(page, '3. Kiểm tra form chặn submit và không chuyển hướng', async () => {
            await expect(page).toHaveURL(/.*login/);
        });
    });
});