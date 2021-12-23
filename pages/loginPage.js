const SELECTORS = {
  ENTER_BUTTON: "//div[text()='Вход']",
  EMAIL_INPUT: "//input[@placeholder = 'Ник или e-mail']",
  PASSWORD_INPUT: "//input[@placeholder = 'Пароль']",
  CLICK_TO_COME_IN_BUTTON: "//button[contains(@class, 'button')]",
};

async function setUsername(username) {
  await $(SELECTORS.EMAIL_INPUT).setValue(username);
}

async function setPassword(password) {
  await $(SELECTORS.PASSWORD_INPUT).setValue(password);
}

async function logIn(user) {
  await setUsername(user.username);
  await setPassword(user.password);
  await $(SELECTORS.CLICK_TO_COME_IN_BUTTON).click();
}

const LoginPage = { logIn };
export default LoginPage;
