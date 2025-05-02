import {
    username_login,
    password_login,
    btn_login
} from '../../locator/login-locator'
import { BasePage } from "../base.page";

export default class LoginPage extends BasePage {
    readonly username_login = this.page.locator(username_login);
    readonly password_login = this.page.locator(password_login);
    readonly btn_login = this.page.locator(btn_login);
    async login(username: string, password: string){
        await Promise.all([
            await this.username_login.fill(username),
            await this.password_login.fill(password)
        ]);
        await this.btn_login.click();
    }
}