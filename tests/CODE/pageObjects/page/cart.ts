import { expect } from '@playwright/test';
import {
    button_add_to_cart,
    button_add_to_cart_2,
    shopping_cart_container,
    button_remove,
    item_name,
    button_remove_detail,
    back_to_list_product,
    checkout,
    firstName,
    lastName,
    postalCode,
    button_continue,
    button_finish,
    cartItems,
    itemPrices
} from '../../locator/cart-locator'
import {
    productSort,
    selectPrice
} from '../../locator/product-sort'
import { BasePage } from "../base.page";

export default class CartPage extends BasePage {
    readonly button_add_to_cart = this.page.locator(button_add_to_cart)
    readonly button_add_to_cart_2 = this.page.locator(button_add_to_cart_2)
    readonly shopping_cart_container = this.page.locator(shopping_cart_container)
    readonly button_remove = this.page.locator(button_remove)
    readonly button_remove_detail = this.page.locator(button_remove_detail)
    readonly button_back_to_list = this.page.locator(back_to_list_product)
    readonly item_name = this.page.locator(item_name)
    readonly checkout = this.page.locator(checkout)
    readonly first_name = this.page.locator(firstName)
    readonly last_name = this.page.locator(lastName)
    readonly postal_code = this.page.locator(postalCode)
    readonly button_continue = this.page.locator(button_continue)
    readonly button_finish = this.page.locator(button_finish)
    readonly cartItems = this.page.locator(cartItems)
    readonly itemPrices = this.page.locator(itemPrices)
   
    async addItemToCart(){
        await this.button_add_to_cart.click()
        await this.button_add_to_cart_2.click()
        await this.shopping_cart_container.click()
    }
    async productDetail(){
        await this.item_name.click()
    }
    async removeItemToCart(){
        await this.button_remove_detail.click()
    }
    async backToList(){
        await this.button_back_to_list.click()
    }
    async checkoutCart(){
        await this.checkout.click()
        await Promise.all([
            await this.first_name.fill('quynh'),
            await this.last_name.fill('bui'),
            await this.postal_code.fill('123456')
        ])
        await this.button_continue.click()
        await this.button_finish.click()
    }
    async VerifyCorrectNumber(){
        const itemCount = await this.cartItems.count()
        const itemPrices = await this.itemPrices.allTextContents()
        const totalPrice = itemPrices.map(price => parseFloat(price.replace('$', ''))).reduce((sum, price) => sum + price, 0)
        console.log("Số lượng sản phẩm trong giỏ hàng", itemCount)
        console.log("Tổng tiền sản phẩm trong giỏ hàng", totalPrice)
        expect(itemCount).toBe(2);
    }
    
}