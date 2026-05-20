import { Page } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) {}

    // Locators
    emailInput = '[data-qa="login-email"]';

    passwordInput = '[data-qa="login-password"]';

    loginButton = '[data-qa="login-button"]';

    // Methods

    async gotoLoginPage() {

        await this.page.goto('/login');
    }

    async enterEmail(email: string) {

        await this.page.locator(this.emailInput).fill(email);
    }

    async enterPassword(password: string) {

        await this.page.locator(this.passwordInput).fill(password);
    }

    async clickLoginButton() {

        await this.page.locator(this.loginButton).click();
    }

    async login(email: string, password: string) {

        await this.enterEmail(email);

        await this.enterPassword(password);

        await this.clickLoginButton();
    }
}