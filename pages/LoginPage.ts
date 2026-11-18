import{Locator , Page} from '@playwright/test';
export class LoginPage{
    page:Page;
    username:Locator;
    password:Locator;
    loginbutton:Locator;
    errormessage:Locator;
   // invalidcred:Locator;

    constructor(page:Page){
        this.page=page;
        this.username=page.locator('[data-test="username"]');
        this.password=page.locator('[data-test="password"]');
        this.loginbutton=page.locator('[data-test="login-button"]');
        this.errormessage=page.locator('[data-test="error"]');
       // this.invalidcred=page.locator('[data-test="error"]');
    }

    async openurl(){
       await this.page.goto("https://www.saucedemo.com/");
       
    }

    async login(username: string, password:string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();
    }
}