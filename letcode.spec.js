import {test,expect} from "@playwright/test";

test('let code',async({page})=>{
    await page.goto('https://letcode.in/forms');
    await page.locator("//input[@id='firstname']").fill('karthik');
    await page.locator("//input[@id='lasttname']").fill('karthik');
    await page.locator("//input[@type='email']").fill('abc@gmail.com');
    await page.locator("//input[@type='text' and @id='Addl1']").fill('aaaaaaa');
    await page.locator("//input[@type='text' and @id='Phno']").fill('9876543210');
    await page.locator("//input[@type='text' and @id='Addl2']").fill('bbbbbbbb');
    await page.locator("//input[@type='text' and @id='postalcode']").fill('629602');
    await page.waitForTimeout(3000);
    await page.locator('.control .select select').nth(0).selectOption('91');
    await page.locator('.control .select select').nth(1).selectOption('India');
    await page.locator("//label[normalize-space()='Male']//input[@type='radio']").check();
    await page.locator("//input[@type='date' and @id='Date']").fill("2026-06-14");
    await page.locator("//label[@class='checkbox']//input[@type='checkbox']").check();
    await page.getByPlaceholder("State").fill("tamilnadu");
    await Promise.all([page.waitForNavigation(),
        page.locator("//input[@type='submit' and @class='button is-primary']").click()]);


})