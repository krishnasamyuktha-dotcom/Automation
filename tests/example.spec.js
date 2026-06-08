const { test, expect } = require('@playwright/test');
const { AmazonHomePage } = require('../pages/amazonHomePage');
const { AmazonSignInPage } = require('../pages/amazonSignInPage');
const siteData = require('../data/site.json');

test.describe('Amazon login flow', () => {
  test('should validate Amazon login error for invalid credentials', async ({ page }) => {
    const homePage = new AmazonHomePage(page, siteData.baseUrl);
    const signInPage = new AmazonSignInPage(page, siteData.baseUrl);

    await homePage.open();
    await homePage.goToSignIn();

    await expect(signInPage.emailTextbox).toBeVisible({ timeout: 15000 });
    await signInPage.enterEmail(siteData.credentials.email);
    await signInPage.clickContinue();

    await expect(signInPage.passwordTextbox).toBeVisible({ timeout: 15000 });
    await signInPage.enterPassword(siteData.credentials.password);
    await signInPage.clickSignIn();

    await expect(signInPage.errorMessageBox).toBeVisible({ timeout: 15000 });
    await expect(signInPage.errorMessageBox).toContainText(siteData.expectedErrorMessage);
  });
});
