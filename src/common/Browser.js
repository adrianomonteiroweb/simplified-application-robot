const puppeteer = require('puppeteer');
require('dotenv').config();

class Browser {
  async browserInit() {
    const browser = await puppeteer.launch({
      headless: process.env.HEADLESS === 'true',
      //executablePath: '/usr/bin/google-chrome',
    });
    const page = await browser.newPage();

    return page;
  }

  async closeBrowser() {
    (await puppeteer.launch({headless: true, args:['--no-sandbox']})).close()
  }
}

module.exports = Browser;