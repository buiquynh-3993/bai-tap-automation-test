import { test, expect } from '@playwright/test';
import { BasePage } from './CODE/pageObjects/base.page';

test('Test BasePage', async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.open("/");
  await basePage.waitForPageLoad();
  await basePage.pause_test()
  await basePage.close();
});
