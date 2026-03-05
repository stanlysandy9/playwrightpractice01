import {test} from "@playwright/test";
import { LoginPage } from "../Pages/login";



test ("@Login Test", async ({page})=>  {
const loginPage = new LoginPage(page);
 await loginPage.openApplication();


})