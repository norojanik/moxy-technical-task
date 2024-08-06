class LoginPage {
  get emailInput() {
    return $(
      '-ios class chain:**/XCUIElementTypeTextField[`name == "input-email"`]'
    );
  }

  get passwordInput() {
    return $(
      '-ios class chain:**/XCUIElementTypeSecureTextField[`name == "input-password"`]'
    );
  }

  get loginButton() {
    return $(
      '-ios class chain:**/XCUIElementTypeStaticText[`name == "LOGIN"`]'
    );
  }

  get emailValidationMessage() {
    return $(
      '~Please enter a valid email address'
    );
  }

  get passwordValidationMessage() {
    return $(
      '~Please enter at least 8 characters'
    );
  }
}

module.exports = new LoginPage();
