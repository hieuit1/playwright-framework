import { Page } from "@playwright/test";

export class ProductDetailsPage {
  constructor(private page: Page) {}

  // Locators
  private quantityInput = "#quantity";
  private addToCartButton = "button.cart";
  private viewCartModalLink = 'u:has-text("View Cart")';
  productName = ".product-information h2";
  modalViewCartLink = 'div.modal-content a[href="/view_cart"]';

  // Methods
  async goto(productId: string = "1") {
    await this.page.goto(
      `https://automationexercise.com/product_details/${productId}`,
    );
  }

  async getProductName() {
    const name = await this.page.locator(this.productName).textContent();
    return name?.trim();
  }

  async setQuantity(quantity: string) {
    // Double click để chọn số lượng cũ và gõ chèn lên, hoặc fill
    const qtyInput = this.page.locator(this.quantityInput);
    await qtyInput.click();
    await qtyInput.fill(quantity);
  }

  // Xóa số lượng mặc định và điền số lượng mới
  async enterQuantity(qty: string) {
    await this.page.locator(this.quantityInput).clear();
    await this.page.locator(this.quantityInput).fill(qty);
  }

  async clickAddToCart() {
    await this.page.locator(this.addToCartButton).click();
  }

  async clickModalViewCart() {
    await this.page.locator(this.viewCartModalLink).click();
  }
  async closeAdvertisement() {
    try {
      const adFrame1 = this.page.frameLocator('iframe[name^="aswift"]').first();
      const adFrame2 = adFrame1
        .frameLocator('iframe[name^="ad_iframe"]')
        .first();

      const closeBtn2 = adFrame2.locator("#dismiss-button");
      const closeBtn1 = adFrame1.locator("#dismiss-button");

      if (await closeBtn2.isVisible({ timeout: 2000 })) {
        await closeBtn2.click();
      } else if (await closeBtn1.isVisible({ timeout: 1000 })) {
        await closeBtn1.click();
      }

      const prompt = this.page.locator("#dismiss-button");
      if (await prompt.isVisible()) {
        await prompt.click();
      }
    } catch (e) {
      // Bỏ qua nếu không tìm thấy quảng cáo
    }
  }
}
