const template = `Playwright test request template:

- Purpose: (one-sentence description of what to test)
- Target URL: (e.g. https://www.example.com)
- Pages / Flow: (brief flow steps, e.g. Home -> Sign in -> Dashboard)
- Locators (unique):
  - element name: selector
  - element name: selector
- Test data: (email, password, other inputs) — use placeholders for secrets
- Expected assertions: (e.g. logged in, error message shown)
- Environment: (local/CI, headless/headful)
- Additional notes: (timeouts, retries, screenshots, trace)

Example:
Purpose: Validate login error for invalid credentials
Target URL: https://www.amazon.com
Pages / Flow: Home -> Sign in -> Enter email -> Continue -> Enter password -> Sign in
Locators:
  - Sign In link: id=nav-link-accountList
  - Email: id=ap_email
  - Continue: id=continue
  - Password: id=ap_password
  - Sign In button: id=auth-signin-button
Test data:
  - email: sam@gmail.com
  - password: 123
Expected assertions:
  - Error message containing: "There was a problem"

Provide the filled template when you want a new test created or an update to existing tests.
`;

console.log(template);

// Optionally, print a short hint to run tests
console.log('\nRun with: npm test');
