import element from "../element/element";
import BasePage from "./basePage";

const SELECTORS = {
  PAGE_ID: "//div[contains(@class,'auth-bar__item--text')]",
  ENTER_BUTTON: "//div[contains(@class, 'item--text')]",
  EMAIL_INPUT: "//input[@placeholder = 'Ник или e-mail']",
  PASSWORD_INPUT: "//input[@placeholder = 'Пароль']",
  CLICK_TO_COME_IN_BUTTON: "//button[contains(@class, 'button')]",
};

async function clickLogin() {
  await element(SELECTORS.ENTER_BUTTON).clickElement();
}

async function isOpened() {
  return BasePage.isPageOpened("Home", SELECTORS.PAGE_ID);
}

const EnterLogPage = { clickLogin, isOpened };
export default EnterLogPage;
