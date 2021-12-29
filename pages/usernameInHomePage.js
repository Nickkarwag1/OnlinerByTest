import element from "../element/element";

const USERNAME_IN_HOMEPAGE = "//div[contains(@class, 'header__name')]";

async function isOpened() {
  return element(USERNAME_IN_HOMEPAGE).waitForElementDisplayed();
}

const UsernameInHomePage = { isOpened };
export default UsernameInHomePage;
