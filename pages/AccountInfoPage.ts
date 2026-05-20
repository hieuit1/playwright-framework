import { Page } from '@playwright/test';

export class AccountInfoPage {

    constructor(private page: Page) {}

    // Locators

    passwordInput = '#password';

    dayDropdown = '#days';

    monthDropdown = '#months';

    yearDropdown = '#years';

    firstNameInput = '#first_name';

    lastNameInput = '#last_name';

    addressInput = '#address1';

    countryDropdown = '#country';

    stateInput = '#state';

    cityInput = '#city';

    zipcodeInput = '#zipcode';

    mobileNumberInput = '#mobile_number';

    createAccountButton = '[data-qa="create-account"]';

    // Methods

    async fillAccountInformation() {

        await this.page.locator(this.passwordInput)
            .fill('123456');

        await this.page.locator(this.dayDropdown)
            .selectOption('1');

        await this.page.locator(this.monthDropdown)
            .selectOption('1');

        await this.page.locator(this.yearDropdown)
            .selectOption('2000');

        await this.page.locator(this.firstNameInput)
            .fill('Hieu');

        await this.page.locator(this.lastNameInput)
            .fill('Nguyen');

        await this.page.locator(this.addressInput)
            .fill('Ho Chi Minh City');

        await this.page.locator(this.countryDropdown)
            .selectOption('India');

        await this.page.locator(this.stateInput)
            .fill('HCM');

        await this.page.locator(this.cityInput)
            .fill('Thu Duc');

        await this.page.locator(this.zipcodeInput)
            .fill('700000');

        await this.page.locator(this.mobileNumberInput)
            .fill('0123456789');
    }

    async clickCreateAccount() {

        await this.page.locator(this.createAccountButton)
            .click();
    }
}