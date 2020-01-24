import * as puppeteer from 'puppeteer';

export class AppPage {
  browser;
  page;

  async getBrowserPage() {
    if (!this.page) {
      this.browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
      this.page = await this.browser.newPage();
      await this.page.setViewport({
        width: 1024,
        height: 768,
        deviceScaleFactor: 1
      });
      await this.page.goto('http://localhost:4200');
    }
    return this.page;
  }

  goto(uri) {
    return this.page.goto('http://localhost:4200/' + uri);
  }

  closeBrowser() {
    return this.browser.close();
  }

  async getText(selector) {
    const bodyHandle = await this.page.$(selector);
    return this.page.evaluate(el => el.innerHTML, bodyHandle);
  }

  async screenshot(path) {
    await this.page.screenshot({ path: './e2e/results/' + path });
  }

  click(selector) {
    return this.page.click(selector);
  }

  type(selector, text) {
    return this.page.type(selector, text);
  }

  evaluate(func) {
    return this.page.evaluate(func);
  }

  waitForNavigation(options) {
    return this.page.waitForNavigation(options);
  }

  waitForSelector(selector) {
    return this.page.waitForSelector(selector, { timeout: 5000 });
  }

  $(selector) {
    return this.page.$(selector);
  }

  select(selector, val) {
    return this.page.select(selector, val);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export const app = new AppPage();
