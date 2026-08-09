import {When,Then,Given} from "@cucumber/cucumber"
import  {Swaglabs} from "../pages/swaglabs"
import { expect} from "@playwright/test"
import {browser,page} from "../utils/playwright"

Given("I enter the swaglabs page",async function(){
    let fpage=new Swaglabs(page)
    await fpage.openpage()
    await fpage.login("standard_user","secret_sauce")
})
When("I add a  product to cart",async function(){
    await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click()
})
When("I checkout that",async function(){
    await page.locator("//a[@class='shopping_cart_link']").click()
    await expect(page.locator("#remove-sauce-labs-backpack")).toBeVisible()
})
Then("I place the order",async function() {
    await page.locator("#continue-shopping").click()
})