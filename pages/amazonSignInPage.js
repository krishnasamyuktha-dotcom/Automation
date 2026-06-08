const { BasePage } = require('./basePage');

class AmazonSignInPage extends BasePage {
  constructor(page, baseUrl) {
    super(page, baseUrl);
    this.emailTextbox = page.locator('#ap_email');
    this.continueButton = page.locator('#continue');
    this.passwordTextbox = page.locator('#ap_password');
    this.signInButton = page.locator('#auth-signin-button');
    this.errorMessageBox = page.locator('#auth-error-message-box');
  }

  async enterEmail(email) {
    await this.emailTextbox.fill(email);
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async enterPassword(password) {
    await this.passwordTextbox.fill(password);
  }

  async clickSignIn() {
    await this.signInButton.click();
  }

  async getErrorText() {
    return this.errorMessageBox.textContent();
  }

  async login(email, password) {
    await this.enterEmail(email);
    await this.clickContinue();
    await this.enterPassword(password);
    await this.clickSignIn();
  }
}

module.exports = { AmazonSignInPage };
