# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> Amazon login flow >> should validate Amazon login error for invalid credentials
- Location: tests\example.spec.js:7:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#ap_email')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('#ap_email')

```

```yaml
- link "Amazon":
  - /url: /ref=ap_frn_logo
  - img "Amazon"
- heading "Sign in or create account" [level=1]
- paragraph: Enter mobile number or email
- textbox "Enter mobile number or email"
- button "Continue"
- paragraph:
  - text: By continuing, you agree to Amazon's
  - link "Conditions of Use":
    - /url: /gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088
  - text: and
  - link "Privacy Notice":
    - /url: /gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496
  - text: .
- list:
  - listitem:
    - button "Need help?"
- text: Buying for work?
- link "Create a free business account":
  - /url: /business/register/org/landing?ref_=ab_reg_signin_unifiedauth
- link "Conditions of Use":
  - /url: /gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=508088
- link "Privacy Notice":
  - /url: /gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=468496
- link "Help":
  - /url: /help
- text: © 1996-2026, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { AmazonHomePage } = require('../pages/amazonHomePage');
  3  | const { AmazonSignInPage } = require('../pages/amazonSignInPage');
  4  | const siteData = require('../data/site.json');
  5  | 
  6  | test.describe('Amazon login flow', () => {
  7  |   test('should validate Amazon login error for invalid credentials', async ({ page }) => {
  8  |     const homePage = new AmazonHomePage(page, siteData.baseUrl);
  9  |     const signInPage = new AmazonSignInPage(page, siteData.baseUrl);
  10 | 
  11 |     await homePage.open();
  12 |     await homePage.goToSignIn();
  13 | 
> 14 |     await expect(signInPage.emailTextbox).toBeVisible({ timeout: 15000 });
     |                                           ^ Error: expect(locator).toBeVisible() failed
  15 |     await signInPage.enterEmail(siteData.credentials.email);
  16 |     await signInPage.clickContinue();
  17 | 
  18 |     await expect(signInPage.passwordTextbox).toBeVisible({ timeout: 15000 });
  19 |     await signInPage.enterPassword(siteData.credentials.password);
  20 |     await signInPage.clickSignIn();
  21 | 
  22 |     await expect(signInPage.errorMessageBox).toBeVisible({ timeout: 15000 });
  23 |     await expect(signInPage.errorMessageBox).toContainText(siteData.expectedErrorMessage);
  24 |   });
  25 | });
  26 | 
```