import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

test('Login successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login(
        'test@gmail.com',
        '123456'
    );

    await expect(page).toHaveURL(/.*login/);
});