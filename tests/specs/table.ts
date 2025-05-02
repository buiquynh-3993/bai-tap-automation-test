import {test} from '../CODE/pageObjects/pageFixture'
import { BasePage } from '../CODE/pageObjects/base.page'
import dotenv from 'dotenv'

dotenv.config();

test.describe('Table Tests', () => {
    test.beforeEach(async ({ page }) => {
        const basePage = new BasePage(page);
        await basePage.open("/");
    });
    test('Web Table', async ({ webTable }) => {
        const firstName = 'Bui'
        const lastName = 'Quynh'
        const userEmail = 'quynh19396@gmail.com'
        const age = '10'
        const salary = '20000000'
        const department = 'Insurance'
        const inputValue = 'Alden'
        await test.step('Add a new row successful', async () => {
            await webTable.addNewRow(firstName, lastName,  userEmail, age, salary, department)
        })
        await test.step('Edit a row', async () => {
            await webTable.editRow(firstName, lastName,  userEmail, age, salary, department)
        })
        await test.step('search product', async () => {
            await webTable.searchTable(inputValue)
        })
    })
})