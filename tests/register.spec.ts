import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { AccountInfoPage } from '../pages/AccountInfoPage';
import { registerData } from '../test-data/registerData';

test.describe('Register Feature Tests', () => {

    // Positive case: Đăng ký thành công
    test('Register successfully', {
        tag: ['@register', '@priority:critical'],
        annotation: [{ type: 'severity', description: 'blocker' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const accountInfoPage = new AccountInfoPage(page);

        // Step 1: Nhập thông tin đăng ký cơ bản
        await registerPage.gotoRegisterPage();
        await registerPage.signup('hieu', `test${Date.now()}@gmail.com`);

        // Step 2: Điền thông tin tài khoản chi tiết
        await accountInfoPage.fillAccountInformation();
        await accountInfoPage.clickCreateAccount();

        // Kiểm tra kết quả
        await expect(page.locator('[data-qa="account-created"]')).toContainText('Account Created!');
    });

    // Negative case: Đăng ký với email đã tồn tại
    test('Register fails when email already exists', {
        tag: ['@register', '@priority:high'],
        annotation: [{ type: 'severity', description: 'critical' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);
        
        await registerPage.gotoRegisterPage();
        
        // Sử dụng dữ liệu existingUser từ file test-data
        await registerPage.signup(
            registerData.existingUser.name, 
            registerData.existingUser.email
        );

        // Kiểm tra thông báo lỗi xuất hiện
        await expect(page.locator(registerPage.existingEmailMessage)).toBeVisible();
    });

    // Negative case: Đăng ký nhưng bỏ trống trường Tên (Name)
    test('Register fails with empty name', {
        tag: ['@register', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.gotoRegisterPage();
        
        // Bỏ trống trường Tên, chỉ nhập Email
        await registerPage.signup('', `test${Date.now()}@gmail.com`);

        // Hệ thống sẽ không cho submit (do HTML5 validation).
        // URL vẫn giữ nguyên là '/login', không chuyển qua trang điền thông tin chi tiết.
        await expect(page).toHaveURL(/.*login/);
    });

    // Negative case: Đăng ký nhưng bỏ trống trường Email
    test('Register fails with empty email', {
        tag: ['@register', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.gotoRegisterPage();
        
        // Nhập trường Tên, bỏ trống trường Email
        await registerPage.signup('hieu', '');

        // Form HTML5 chặn submit, nên trang không đổi
        await expect(page).toHaveURL(/.*login/);
    });

    // Negative case: Đăng ký nhưng bỏ trống cả Tên và Email
    test('Register fails with empty name and email', {
        tag: ['@register', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.gotoRegisterPage();
        
        // Bỏ trống cả 2 trường
        await registerPage.signup('', '');

        // Form bị chặn submit
        await expect(page).toHaveURL(/.*login/);
    });

    // Negative case: Đăng ký với Tên chỉ chứa số
    test('Register fails with number as name', {
        tag: ['@register', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.gotoRegisterPage();
        
        // Nhập số vào trường Tên
        await registerPage.signup('123456789', `test${Date.now()}@gmail.com`);

        // Giả sử logic nghiệp vụ không cho phép tên là số, việc đăng ký phải bị chặn
        // (Nếu website thực tế cho phép, test này sẽ báo fail để lập trình viên kiểm tra lại logic)
        await expect(page).toHaveURL(/.*login/);
    });

    // Negative case: Đăng ký với Email sai định dạng
    test('Register fails with incorrect email format', {
        tag: ['@register', '@priority:low'],
        annotation: [{ type: 'severity', description: 'minor' }]
    }, async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.gotoRegisterPage();
        
        // Nhập email không có ký tự '@'
        await registerPage.signup('hieu', 'wrongemailformat.com');

        // Form HTML5 (type="email") sẽ chặn submit
        await expect(page).toHaveURL(/.*login/);
    });
});