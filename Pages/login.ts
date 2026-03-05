import { Locator, Page } from "@playwright/test";


export class LoginPage {
    readonly page: Page;
    readonly userName: Locator;
    readonly signIn: Locator;



    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator("id=user-name");
        this.signIn = page.locator("text=Sign in");
    }

    async openApplication() {
        await this.page.goto("https://www.google.com");
        console.log("google opened");
       await this.page.waitForTimeout(10000);
        this.signIn.click();
        await this.page.waitForTimeout(10000);
        console.log("clicked");
    }
}