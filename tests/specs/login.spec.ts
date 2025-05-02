import {test} from '../CODE/pageObjects/pageFixture';
import { BasePage } from '../CODE/pageObjects/base.page';
import dotenv from 'dotenv'

dotenv.config();

test.skip('Login Tests', () => {
    test.beforeEach(async ({page}) => {
        const basePage = new BasePage(page);
        await basePage.open("/");
    });
    test('test', async ({loginPage}) =>{
        const password = "secret_sauce";
        const username = "standard_user";
        await test.step('Check case login successful', async () => {
            await loginPage.login(username, password)
        })
        await test.step('Check case login fail', async () => {
            await loginPage.login('quynh', 'quynh123@')
        })
    })
});
