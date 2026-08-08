import { Browser, Page } from '@playwright/test';

export let browser: Browser;
export let page: Page;

export function setBrowser(newBrowser: Browser) {
  browser = newBrowser;
}

export function setPage(newPage: Page) {
  page = newPage;
}