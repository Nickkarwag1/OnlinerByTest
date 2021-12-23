const USER = {
  USERNAME: "nick98_molo@icloud.com",
  PASSWORD: "Kol90407",
};

const SELECTORS = {
  ENTER_BUTTON: "//div[text()='Вход']",
  EMAIL_INPUT: "//input[@placeholder = 'Ник или e-mail']",
  PASSWORD_INPUT: "//input[@placeholder = 'Пароль']",
  CLICK_TO_COME_IN_BUTTON: "//button[contains(@class, 'button')]",
};

async function enter(SELECTORS) {
  await $(SELECTORS.ENTER_BUTTON).click();
}

const enterLogPage = { enter };
export { enterLogPage, SELECTORS, USER };