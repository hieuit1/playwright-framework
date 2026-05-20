import { Page } from '@playwright/test';

export class HomePage {
    constructor(private page: Page) {}

    // Locators trên thanh điều hướng (Navbar)
    logoutLink = 'a[href="/logout"]'; // Nút Logout

    // Methods
    async clickLogout() {
        await this.page.locator(this.logoutLink).click();
    }
}
