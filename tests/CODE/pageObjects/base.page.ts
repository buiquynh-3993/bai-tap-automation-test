// base.page.ts
import { Page } from '@playwright/test';

export class BasePage {
  constructor(readonly page: Page) { }

  public baseUrl = 'https://demoqa.com/webtables';
  async open(path: string) {
    await this.page.goto(this.baseUrl + path, {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
  }
  async close() {
    await this.page.close();
  }
  async waitForPageLoad() {
    await this.page.waitForLoadState('domcontentloaded');
  }
  async pause_test() {
    await this.page.pause();
  }
  async reload_page() {
    await this.page.reload({ waitUntil: 'domcontentloaded' });
  }
}
