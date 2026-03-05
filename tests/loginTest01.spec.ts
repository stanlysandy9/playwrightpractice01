import { LoginPage } from "../Pages/login"
import test from "@playwright/test";



test ("@QA test 01 playwrightpractice01", async ({page})=>{
const loginPage =new LoginPage(page);
    await loginPage.openApplication();

})