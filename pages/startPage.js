

const SELECTORS = {
  ENTER_BUTTON: "//div[text()='Вход']",
  EMAIL_INPUT: "//input[@placeholder = 'Ник или e-mail']",
  PASSWORD_INPUT: "//input[@placeholder = 'Пароль']",
  CLICK_TO_COME_IN_BUTTON: "//button[contains(@class, 'button')]",
};

async function clickLogin() {
  await $(SELECTORS.ENTER_BUTTON).click();
}

const EnterLogPage = { clickLogin };
export default  EnterLogPage;
