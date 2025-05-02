import {test as base} from '@playwright/test'
import LoginPage from './page/login'
import CartPage from './page/cart';
import ProductPage from './page/product';
import WebTable from './page/table';

export type PageObjects = {
    loginPage: LoginPage;
    cartPage: CartPage;
    productPage: ProductPage
    webTable: WebTable
}

export const test = base.extend<PageObjects>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage)
    },
    cartPage: async ({page}, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage)
    },
    productPage: async ({page}, use) => {
        const productPage = new ProductPage(page);
        await use(productPage)
    },
    webTable: async ({page}, use) => {
        const webTable = new WebTable(page);
        await use(webTable)
    }
});

export{
    expect,
    type Page,
    type Locator,
    type Response,
} from '@playwright/test'