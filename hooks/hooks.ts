import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import {
  browser,
  setBrowser,
  setPage
} from '../utils/playwright';

setDefaultTimeout(30000);

Before(async function () {
  const newBrowser = await chromium.launch({
    headless: false
  });

  setBrowser(newBrowser);

  const newPage = await newBrowser.newPage();

  setPage(newPage);
});

After(async function () {
  await browser.close();
});