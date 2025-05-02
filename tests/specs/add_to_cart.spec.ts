import { test } from '../CODE/pageObjects/pageFixture'
import { BasePage } from '../CODE/pageObjects/base.page';
import dotenv from 'dotenv'

dotenv.config();
test.skip('Login Tests', () => {
    test.beforeEach(async ({ page }) => {
        const basePage = new BasePage(page);
        await basePage.open("/");
    });
    
    test('Cart Functionality', async ({ cartPage, loginPage  }) => {
        const password = 'secret_sauce';
        const username = 'standard_user';
    
        await test.step('Check case login successful', async () => {
            await loginPage.login(username, password);
        });
        await test.step('Add item to cart successfully', async () => {
            await cartPage.addItemToCart();
        });
        // await test.step('Check item detail', async () => {
        //     await cartPage.productDetail();
        // })
        // await test.step('remove item', async () => {
        //     await cartPage.removeItemToCart()
        // })
        // await test.step('Back to list', async () => {
        //     await cartPage.backToList()
        // })
        // await test.step('Verify correct number of items in cart', async () => {
        //     await cartPage.VerifyCorrectNumber()
        // })
        // await test.step('Checkout', async () => {
        //     await cartPage.checkoutCart()
        // })
    });
})

