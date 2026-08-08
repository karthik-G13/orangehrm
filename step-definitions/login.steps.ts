import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { page } from '../utils/playwright';

Given('I am on the OrangeHRM login page', async function () {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When('I enter valid username and password', async function () {
  const loginPage = new LoginPage(page);

  await loginPage.enterUsername('Admin');
  await loginPage.enterPassword('admin123');
});

When('I click the login button', async function () {
  const loginPage = new LoginPage(page);

  await loginPage.clickLogin();
});

Then('I should see the OrangeHRM dashboard', async function () {
  await page.waitForURL('**/dashboard/index');
});