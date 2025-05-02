import { BasePage } from "../base.page";
import {
    firstName,
    lastName,
    userEmail,
    age,
    salary,
    department,
    submitButton,
    addNewRecordButton,
    editRecord,
    deleteRecord,
    searchBox
} from "../../locator/table-locator"

export default class WebTable extends BasePage {
    readonly addNewRecordButton = this.page.locator(addNewRecordButton)
    readonly firstName = this.page.locator(firstName)
    readonly lastName = this.page.locator(lastName)
    readonly userEmail = this.page.locator(userEmail)
    readonly age = this.page.locator(age)
    readonly salary = this.page.locator(salary)
    readonly department = this.page.locator(department)
    readonly submitButton = this.page.locator(submitButton)
    readonly editRecord = this.page.locator(editRecord)
    readonly deleteRecord = this.page.locator(deleteRecord)
    readonly searchBox = this.page.locator(searchBox)
    async addNewRow(firstName: string, lastName: string, userEmail: string, age: any, salary: any, department: string){
        await this.addNewRecordButton.click()
        await Promise.all([
            await this.firstName.fill(firstName),
            await this.lastName.fill(lastName),
            await this.userEmail.fill(userEmail),
            await this.age.fill(age),
            await this.salary.fill(salary),
            await this.department.fill(department),
        ])
        await this.submitButton.click();
    }
    async editRow(firstName: string, lastName: string, userEmail: string, age: any, salary: any, department: string){
        await this.editRecord.click()
        await Promise.all([
            await this.firstName.fill(firstName),
            await this.lastName.fill(lastName),
            await this.userEmail.fill(userEmail),
            await this.age.fill(age),
            await this.salary.fill(salary),
            await this.department.fill(department),
        ])
        await this.submitButton.click();
    }
    async deleteRow(){
        await this.deleteRecord.click()
    }
    async searchTable(textBox: string){
        await this.searchBox.fill(textBox)
        await this.pause_test()
    }
}