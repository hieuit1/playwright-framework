import { Page } from "@playwright/test";
import { allure } from "allure-playwright";

/**
 * Helper: chụp screenshot + đính vào Allure report ở từng step.
 *
 * Cách dùng:
 *   await step(page, 'Mở trang login', async () => {
 *       await page.goto('https://www.saucedemo.com');
 *   });
 */
export async function step(
  page: Page,
  name: string,
  action: () => Promise<void>,
): Promise<void> {
  await allure.step(name, async () => {
    try {
      await action();
    } finally {
      // Luôn chụp screenshot sau mỗi step, ngay cả khi có lỗi
      const screenshot = await page.screenshot({ fullPage: false });
      // Type các tham số của allure.attachment phải match với thư viện (allure-playwright)
      await allure.attachment(`Screenshot: ${name}`, screenshot, "image/png");
    }
  });
}
