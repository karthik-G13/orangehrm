import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  private usernameInput = 'input[name="username"]';
  private passwordInput = 'input[name="password"]';
  private loginButton = 'button[type="submit"]';

  async enterUsername(username: string) {
    await this.page.locator(this.usernameInput).fill(username);
  }

  async enterPassword(password: string) {
    await this.page.locator(this.passwordInput).fill(password);
  }

  async clickLogin() {
    await this.page.locator(this.loginButton).click();
  }
}
