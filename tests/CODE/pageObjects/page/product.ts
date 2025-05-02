import {
    productSort,
    selectPrice,
    selectValue
} from '../../locator/product-sort'
import { BasePage } from "../base.page";

export default class ProductPage extends BasePage {
    readonly productSort = this.page.locator(productSort)
    readonly selectPrice = this.page.locator(selectPrice)
    // readonly selectValue = this.page.locator(selectValue)
    async checkSortProduct(){
        // await this.productSort.click()
        // console.log('selectPrice', selectPrice)
        await this.selectPrice.selectOption(selectValue);
        await this.pause_test()
    }
}