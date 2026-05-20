import { test, expect } from '@playwright/test';

import { RegisterPage } from '../pages/RegisterPage';

import { AccountInfoPage } from '../pages/AccountInfoPage';

test('Register successfully', async ({ page }) => {

    const registerPage = new RegisterPage(page);

    const accountInfoPage = new AccountInfoPage(page);

    // Step 1
    await registerPage.gotoRegisterPage();

    await registerPage.signup(
        'hieu',
        `test${Date.now()}@gmail.com`
    );

    // Step 2
    await accountInfoPage.fillAccountInformation();

    await accountInfoPage.clickCreateAccount();

    // Assertion
   await expect(
    page.locator('[data-qa="account-created"]')
).toContainText('Account Created!');
});