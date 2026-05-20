import { Page } from '@playwright/test';

export class RegisterPage {
    constructor(private page: Page) {}

    // Locators
    signupNameInput = '[data-qa="signup-name"]';
    signupEmailInput = '[data-qa="signup-email"]';
    signupButton = '[data-qa="signup-button"]';
    existingEmailMessage = 'text=Email Address already exist!';

    // Methods
    async gotoRegisterPage() {
        await this.page.goto('/login');
    }

    async enterName(name: string) {
        await this.page.locator(this.signupNameInput).fill(name);
    }

    async enterEmail(email: string) {
        await this.page.locator(this.signupEmailInput).fill(email);
    }

    async clickSignupButton() {
        await this.page.locator(this.signupButton).click();
    }

    // Thực hiện chức năng Đăng ký (Bước 1)
    async signup(name: string, email: string) {
        await this.enterName(name);
        await this.enterEmail(email);
        await this.clickSignupButton();
    }
}