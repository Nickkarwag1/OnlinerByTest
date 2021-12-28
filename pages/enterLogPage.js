import element from "../element/element";

const SELECTORS = {
  ENTER_BUTTON: "//div[contains(@class, 'item--text')]",
  EMAIL_INPUT: "//input[@placeholder = 'Ник или e-mail']",
  PASSWORD_INPUT: "//input[@placeholder = 'Пароль']",
  CLICK_TO_COME_IN_BUTTON: "//button[contains(@class, 'button')]",
};

async function clickLogin() {
  await element(SELECTORS.ENTER_BUTTON).clickElement();
}

const EnterLogPage = { clickLogin };
export default EnterLogPage;
