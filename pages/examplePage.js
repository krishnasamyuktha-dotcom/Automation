const { BasePage } = require('./basePage');

class ExamplePage extends BasePage {
  constructor(page, baseUrl) {
    super(page, baseUrl);
    this.headingLocator = page.locator('h1');
  }

  async open() {
    await this.goto(this.baseUrl);
  }
}

module.exports = { ExamplePage };
