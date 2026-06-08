class BasePage {
  constructor(page, baseUrl) {
    this.page = page;
    this.baseUrl = baseUrl;
  }

  async goto(path) {
    return this.page.goto(path);
  }
}

module.exports = { BasePage };
