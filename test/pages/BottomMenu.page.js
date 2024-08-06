class BottomMenuPage {
    get loginButton() {
      return $("~Login");
    }

    get formsButton() {
      return $("~Forms");
    }
  }
  
  module.exports = new BottomMenuPage();