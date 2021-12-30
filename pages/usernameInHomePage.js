import element from "../element/element";

const SELECTORS = {
  USERNAME: "//div[contains(@class, 'header__name')]",
};

function getUserName() {
  return element(SELECTORS.USERNAME).getElementText();
}

const UsernameInHomePage = { getUserName };
export default UsernameInHomePage;
