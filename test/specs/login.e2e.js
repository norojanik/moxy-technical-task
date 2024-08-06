const BottomMenuPage = require("../pages/BottomMenu.page");
const LoginPage = require("../pages/Login.page");

describe("Login tests", () => {
  beforeEach(async () => {
    await BottomMenuPage.loginButton.click();
  });

  it("should not login with invalid credentials", async () => {
    await LoginPage.loginButton.click();
    await expect(LoginPage.emailValidationMessage).toHaveText(
      "Please enter a valid email address"
    );
    await expect(LoginPage.passwordValidationMessage).toHaveText(
      "Please enter at least 8 characters"
    );
  });

  it("should not login with invalid credentials", async () => {
    await LoginPage.emailInput.setValue("invalidEmail");
    await LoginPage.passwordInput.setValue("password");
    await LoginPage.loginButton.click();

    await expect(LoginPage.emailValidationMessage).toHaveText(
      "Please enter a valid email address"
    );
  });

  it("should log in with valid credentials", async () => {
    await LoginPage.emailInput.setValue("12@2.nl");
    await LoginPage.passwordInput.setValue("12345678");
    await LoginPage.loginButton.click();
  });
});
