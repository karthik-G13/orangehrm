/*const {test,expect}=require("@playwright/te
test("google title",async({page})=>{
    await page.goto('https://google.com');
    await expect(page).toHaveTitle("Google");
});*/

/*const {chromium}=require("playwright");
(async()=>{
    const browser=await chromium.launch();
    const page=await browser.newPage();
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.locator("#username").fill("tomsmith");
    await page.locator("#password").fill("SuperSecretPassword!");
    await page.locator("button[type='submit']").click();
    let a =await page.locator("#flash");
    await a.waitFor();
    console.log(await a.textContent);
})();*/

/*const {test,expect}=require("@playwright/test");
test("wikipedia title",async ({page})=>{
    await page.goto("https://www.wikipedia.org/");
    await page.locator("#searchInput").fill("playwright");
    await page.getByRole("button",{name:'search'}).click();
    await expect(page).toHaveTitle(/playwright/i);
});*/

/*const {test,expect}=require("@playwright/test");
const {LoginPage}= require('../pages/loginpage');
const data=require("../data/logindata");
data.forEach((value) => {
test(`login for ${value.username}`,async({page}) => {
    const loginpage=new LoginPage(page);
    await loginpage.open();
    await loginpage.login(
        value.username,
        value.password
    );
    await expect(page.locator("#flash")).toContainText(value.expected);
});
});*/

/*const {test,expect}=require("@playwright/test");
test("practice1",async({page})=>{
    
    await page.goto("https://demoqa.com/text-box");
    await page.getByPlaceholder("Full Name").fill("karthik");
    await page.getByPlaceholder("name@example.com").fill("donkarthik@gmail.com");
    await page.getByPlaceholder("Current Address").fill("thengamputhoor");
    await page.locator("#permanentAddress").fill("thengamputhoor");
    await page.locator('#submit').click();
});*/


/*const {test,expect}=require("@playwright/test");
const {saucecode}=require("../pages/saucecode");


test.beforeEach(async({page})=>{
    const pag=new saucecode();
    await pag.open(page);
    await pag.login(page,'standard_user', 'secret_sauce');
});

test('saucecode',async({page})=>{
    const pag=new saucecode();
    
   
    await expect(page.locator('.shopping_cart_link')).toBeVisible();

    await pag.addcart(page);
    await expect(page.locator('.cart_quantity')).toHaveText('1');
    await pag.checkout(page,'karthik','smart','98765');
    
});

test.afterEach(async({page})=>{
    const pag=new saucecode();
    await pag.logout(page);
    await expect(page.locator(".login_logo")).toBeVisible();
});
test.afterEach(()=>{
    console.log('test finished')
})*/

/*const { test, expect } = require('@playwright/test');

test('checkout flow', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  await page.click('#add-to-cart-sauce-labs-backpack');

  await page.click('.shopping_cart_link');

  await page.click('#checkout');

  await page.fill('#first-name', 'karthik');
  await page.fill('#last-name', 'smart');

  // ❌ BUG 1
  await page.fill("#postal-code", '98765');

  await page.click('#continue');

  // ❌ BUG 2
  await expect(page.locator('.summary_info')).toBeVisible();

  await page.click('#finish');

  // ❌ BUG 3
  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');

});*/

/*const { test, expect } = require('@playwright/test');

test('remove product', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  await page.click('#add-to-cart-sauce-labs-backpack');

  await page.click('.shopping_cart_link');

  // BUG 1
  await page.click('#remove-sauce-labs-backpack');

  await expect(page.locator('.cart_item')).not.toBeVisible();
  

});*/

/*const {test,expect}=require("@playwright/test");
const {Orangepage}=require('../pages/orange');

test.describe('bugtest',()=>{
    test('orange',async({page})=>{
        const pag=new Orangepage(page);
        await pag.open();
        await pag.login('Admin', 'admin123');
        console.log('login success')
        await expect(page.locator(".oxd-brand")).toBeVisible();
        console.log('page loaded successfully')
        await pag.logout();
        console.log('logout success')
    })
})*/

/*const { test, expect } = require("@playwright/test");
const { Orangepage } = require("../pages/orange");

test("pim add employee", async ({ page }) => {

    const pag = new Orangepage(page);

    await pag.open();
    await pag.login("Admin", "admin123");

    await page.click("text=PIM");

    await page.click("text=Add Employee");

    await page.fill("input[name='firstName']", "John");
    await page.fill("input[name='lastName']", "Doe");

    await page.click("button[type='submit']");

    // ❌ BUG: flaky assertion
    await expect(page.locator(".oxd-toast-content")).toBeVisible();

});*/

/*const {test,expect}=require('../fixtures/logged');

test.describe("orange",()=>{
    test.beforeEach(async({logged})=>{
        await expect(logged.locator(".oxd-main-menu-item").nth(1)).toBeVisible();
    });
    test('adminpage',async({logged})=>{
        await logged.locator('.oxd-main-menu-item').nth(1).click();
        await expect(logged.locator(".orangehrm-header-container")).toBeVisible();
    });
    test('logout',async({logged})=>{
        await logged.locator(".oxd-userdropdown-tab").click();
        await logged.getByText('Logout').click();
    });
});*/

/*import  {test,expect} from '@playwright/test';
import {sauce} from "../pages/225";

test.describe("sauce",()=>{
    let pag;
    test.beforeEach(async({page})=>{
        pag=new sauce(page);
        await pag.open();
        await expect(page.locator(".login_logo")).toHaveText("Swag Labs");
    })
    test("valid login",async({page})=>{
        await pag.login("standard_user",'secret_sauce');
        await expect(page.locator('.shopping_cart_link')).toBeVisible();
        
    })
    test('invalid login',async({page})=>{
        await pag.login("karthik","username");
        await expect(page.locator(".error-message-container")).toBeVisible();
    })
    test('cart validation',async({page})=>{
        await pag.login("standard_user",'secret_sauce');
        await expect(page.locator('.shopping_cart_link')).toBeVisible();
        await pag.addcart();
        await expect(page.locator('.shopping_cart_link')).toHaveText('1');
    })
    test('check out',async({page})=>{
        await pag.login("standard_user",'secret_sauce');
        await pag.addcart();
        await pag.checkout('kartik',"karthik","876655");
        await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
    })
        
})*/





