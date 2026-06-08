const { BasePage } = require('./basePage');

class AmazonHomePage extends BasePage {
  constructor(page, baseUrl) {
    super(page, baseUrl);
    this.signInLink = page.locator('#nav-link-accountList');
  }

  async open() {
    await this.goto(this.baseUrl);
  }

  async goToSignIn() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
      this.signInLink.click(),
    ]);
  }
}

module.exports = { AmazonHomePage };
