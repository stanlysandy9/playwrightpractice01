import { Locator, Page } from "@playwright/test";


export class LoginPage{
readonly page : Page;
readonly userNameInput : Locator;
readonly passwordImput : Locator;
readonly loginButton : Locator;



  constructor (page:Page){
  this.page = page;
  this.userNameInput = page.locator("id=User-Name");
  this.passwordImput = page.locator ("id=Password");
  this.loginButton = page.locator ("id=Login");
}
 
async openApplication() {

  await  this.page.goto("https://www.google.com");
}



}