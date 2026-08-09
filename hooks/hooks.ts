import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import {
  browser,
  setBrowser,
  setPage
} from '../utils/playwright';

setDefaultTimeout(30000);

Before(async function (){
  const newbrowser=await chromium.launch({headless:false})
  const newpage=await newbrowser.newPage()
  setBrowser(newbrowser)
  setPage(newpage)
});

After(async function () {
  await browser.close();
});