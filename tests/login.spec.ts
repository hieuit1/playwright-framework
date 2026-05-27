import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { allure } from 'allure-playwright';
import { step } from './helpers/stepWithScreenshot';

test.describe('Login Feature Tests', () => {

    // Positive case: Đăng nhập thành công
   test('Login successfully', {
        tag: ['@login', '@priority:critical'],
        annotation: [
            { type: 'severity', description: 'blocker' },
            { type: 'issue', description: 'SCRUM-1' }
        ]
    }, async ({ page }) => {
        const loginPage = new LoginPage(page);

        // 1. Phân cấp kịch bản cho Report (Giống như chia module trong dự án)
        await allure.epic('Authentication');
        await allure.feature('Login Flow');
        await allure.story('Valid Login');

        // 2. Chia các hành động thành từng Step rõ ràng
        await step(page, '1. Đi tới trang Đăng nhập', async () => {
            await loginPage.gotoLoginPage();
        });

        await step(page, '2. Nhập Email và Password hợp lệ', async () => {
            // Hàm login này sẽ tự động điền email và mật khẩu rồi ấn click
            await loginPage.login('automationtesterpro@gmail.com', '123456');
        });

        await step(page, '3. Kiểm tra chuyển hướng thành công tới trang chủ', async () => {
            await expect(page).toHaveURL('https://automationexercise.com/');
        });
    });
    
    // Negative case: Đăng nhập sai mật khẩu
    test('Login fails with incorrect password', {
        tag: ['@login', '@priority:high'],
        annotation: [{ type: 'severity', description: 'critical' }]
    }, async ({ page }) => {
        const loginPage = new LoginPage(page);

        await allure.epic('Authentication');
        await allure.feature('Login Flow');
        await allure.story('Invalid Password');

        await step(page, '1. Đi tới trang Đăng nhập', async () => {
            await loginPage.gotoLoginPage();
        });

        await step(page, '2. Nhập sai mật khẩu', async () => {
            await loginPage.login('test@gmail.com', 'wrongpassword');
        });

        await step(page, '3. Kiểm tra thông báo lỗi xuất hiện', async () => {
            await expect(page.locator(loginPage.errorMessage)).toBeVisible();
        });
    });

    // Negative case: Đăng nhập với email không tồn tại
    test('Login fails with non-existing email', {
        tag: ['@login', '@priority:medium'],
        annotation: [{ type: 'severity', description: 'normal' }]
    }, async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await allure.epic('Authentication');
        await allure.feature('Login Flow');
        await allure.story('Non-existing Email');

        await step(page, '1. Đi tới trang Đăng nhập', async () => {
            await loginPage.gotoLoginPage();
        });
        
        await step(page, '2. Nhập Email không tồn tại', async () => {
            await loginPage.login(`notexist${Date.now()}@gmail.com`, '123456');
        });

        await step(page, '3. Kiểm tra thông báo lỗi xuất hiện', async () => {
            await expect(page.locator(loginPage.errorMessage)).toBeVisible();
        });
    });

    // Negative case: Đăng nhập nhưng bỏ trống cả Email và Password
    test('Login fails with empty email and password', {
        tag: ['@login', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await allure.epic('Authentication');
        await allure.feature('Login Flow');
        await allure.story('Empty Email and Password');

        await step(page, '1. Đi tới trang Đăng nhập', async () => {
            await loginPage.gotoLoginPage();
        });
        
        await step(page, '2. Bỏ trống cả Email và Password', async () => {
            await loginPage.login('', '');
        });

        await step(page, '3. Kiểm tra form chặn submit và không chuyển hướng', async () => {
            // Form HTML5 chặn submit, trang không chuyển hướng
            await expect(page).toHaveURL(/.*login/);
        });
    });

    // Negative case: Đăng nhập bỏ trống trường Email
    test('Login fails with empty email', {
        tag: ['@login', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await allure.epic('Authentication');
        await allure.feature('Login Flow');
        await allure.story('Empty Email');

        await step(page, '1. Đi tới trang Đăng nhập', async () => {
            await loginPage.gotoLoginPage();
        });
        
        await step(page, '2. Bỏ trống trường Email', async () => {
            await loginPage.login('', '123456');
        });

        await step(page, '3. Kiểm tra form chặn submit và không chuyển hướng', async () => {
            // Form HTML5 chặn submit, trang không chuyển hướng
            await expect(page).toHaveURL(/.*login/);
        });
    });

    // Negative case: Đăng nhập bỏ trống trường Password
    test('Login fails with empty password', {
        tag: ['@login', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await allure.epic('Authentication');
        await allure.feature('Login Flow');
        await allure.story('Empty Password');

        await step(page, '1. Đi tới trang Đăng nhập', async () => {
            await loginPage.gotoLoginPage();
        });
        
        await step(page, '2. Bỏ trống trường Password', async () => {
            await loginPage.login('test@gmail.com', '');
        });

        await step(page, '3. Kiểm tra form chặn submit và không chuyển hướng', async () => {
            // Form HTML5 chặn submit, trang không chuyển hướng
            await expect(page).toHaveURL(/.*login/);
        });
    });

    // Negative case: Đăng nhập với Email sai định dạng
    test('Login fails with incorrect email format', {
        tag: ['@login', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await allure.epic('Authentication');
        await allure.feature('Login Flow');
        await allure.story('Incorrect Email Format');

        await step(page, '1. Đi tới trang Đăng nhập', async () => {
            await loginPage.gotoLoginPage();
        });
        
        await step(page, '2. Nhập Email sai định dạng', async () => {
            await loginPage.login('wrongemailformat.com', '123456');
        });

        await step(page, '3. Kiểm tra form chặn submit và không chuyển hướng', async () => {
            // Form HTML5 chặn submit, trang không chuyển hướng
            await expect(page).toHaveURL(/.*login/);
        });
    });
});