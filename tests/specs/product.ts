import { test } from '../CODE/pageObjects/pageFixture'
import { BasePage } from '../CODE/pageObjects/base.page';
import dotenv from 'dotenv'

dotenv.config();
test.skip('test product', () => {
    test.beforeEach(async ({ page }) => {
        const basePage = new BasePage(page);
        await basePage.open("/");
    });
    test('Cart Functionality', async ({ productPage, loginPage  }) => {
        const password = 'secret_sauce';
        const username = 'standard_user';
        await test.step('Check case login successful', async () => {
            await loginPage.login(username, password);
        });
        await test.step('Check product sort', async () => {
            await productPage.checkSortProduct()
        })
    })
})
