import{test,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
test('verify successful login',async ({page})=>{
    const login = new LoginPage(page);
    await login.openurl();
    await login.login("standard_user",'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

} )