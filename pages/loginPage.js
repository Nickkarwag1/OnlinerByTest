import element from "../element/element";

const SELECTORS = {
  ENTER_BUTTON: "//div[text()='Вход']",
  EMAIL_INPUT: "//input[@placeholder = 'Ник или e-mail']",
  PASSWORD_INPUT: "//input[@placeholder = 'Пароль']",
  CLICK_TO_COME_IN_BUTTON: "//button[contains(@class, 'button')]",
};

async function setUsername(username) {
  await element(SELECTORS.EMAIL_INPUT).setValue(username);
}

async function setPassword(password) {
  await element(SELECTORS.PASSWORD_INPUT).setValue(password);
}

async function logIn({ EMAIL, PASSWORD }) {
  await setUsername(EMAIL);
  await setPassword(PASSWORD);
  await element(SELECTORS.CLICK_TO_COME_IN_BUTTON).clickElement();
}

const LoginPage = { logIn };
export default LoginPage;
