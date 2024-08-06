class FormPage {
  get textInput() {
    return $("~text-input");
  }

  get switchToggle() {
    return $("~switch");
  }

  get selectedItem() {
    return $(
      '-ios class chain:**/XCUIElementTypeTextField[`name == "text_input"`]'
    );
  }

  get activeButton() {
    return $(
      '-ios class chain:**/XCUIElementTypeStaticText[`name == "Active"`]'
    );
  }

  get inactiveButton() {
    return $(
      '-ios class chain:**/XCUIElementTypeStaticText[`name == "Inactive"`]'
    );
  }
}

module.exports = new FormPage();
