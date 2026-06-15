const { defineConfig } = require('@playwright/test');
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({

  testDir: './tests',
  fullyParallel: true,

  workers :4,

  use: {
    
    screenshot: 'only-on-failure',

    trace: 'on',

    //video: 'retain-on-failure',

    headless: true,
    
    
    //storageState: 'fixtures/saucecode.json'
  },
  reporter: [

  ['html', { open: 'on-failure' }],

  ['list'],
  ['allure-playwright']
  

],


});

