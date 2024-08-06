const BottomMenuPage = require("../pages/BottomMenu.page");
const FormPage = require("../pages/Form.page");

describe("Login tests", () => {
  beforeEach(async () => {
    await BottomMenuPage.formsButton.click();
  });

  it("disaplay entered text", async () => {
    await FormPage.textInput.setValue("Test text");
    await expect($("~input-text-result")).toHaveText("Test text");
  });

  it("should switch the toggle", async () => {
    await FormPage.switchToggle.click();
    await expect($("~switch-text")).toHaveText("Click to turn the switch OFF");
  });

  it("select option from the dropdown", async () => {
    await $("~Dropdown").click();
    await $("XCUIElementTypePickerWheel").setValue("webdriver.io is awesome");
    await expect(FormPage.selectedItem).toHaveText("webdriver.io is awesome");
  });

  it("assert the active and inactive buttons attributes", async () => {
    await $('//XCUIElementTypeStaticText[@name="Active"]');
    await expect(FormPage.activeButton).toHaveAttributeContaining(
      "value",
      "Active"
    );

    // await $('//XCUIElementTypeStaticText[@name="Inactive"]');
    await expect(FormPage.inactiveButton).toHaveAttributeContaining(
      "value",
      "Inactive"
    );
  });
});
