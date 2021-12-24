const SELECTORS = {
  ENTER_BUTTON: "//div[text()='Вход']",
  EMAIL_INPUT: "//input[@placeholder = 'Ник или e-mail']",
  PASSWORD_INPUT: "//input[@placeholder = 'Пароль']",
  CLICK_TO_COME_IN_BUTTON: "//button[contains(@class, 'button')]",
};

async function setUsername(username) {
  await $(SELECTORS.EMAIL_INPUT).addValue(username);
}

async function setPassword(password) {
  await $(SELECTORS.PASSWORD_INPUT).addValue(password);
}

async function logIn(user) {
  await setUsername(user.USERNAME);
  await browser.pause(1000);
  await setPassword(user.PASSWORD);
  await browser.pause(1000)
  await $(SELECTORS.CLICK_TO_COME_IN_BUTTON).click();
}

const LoginPage = { logIn };
export default LoginPage;
