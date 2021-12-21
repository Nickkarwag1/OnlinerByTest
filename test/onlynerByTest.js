const USER = { USERNAME: "test@gmail.com", PASSWORD: "12314351325" };
const EMAIL_INPUT_SELECTOR = "//input[@placeholder = 'Ник или e-mail']";
const PASSWORD_INPUT_SELECTOR = "//input[@placeholder = 'Пароль']";
const ENTER_BUTTON_SELECTOR = "//div[text()='Вход']";

describe("Open Page", function () {
  it("Open browser page in url and input login & password", async function () {
    await browser.url("https://www.onliner.by/");
    await browser.pause(5000);
    const enterButton = $(ENTER_BUTTON_SELECTOR);
    await browser.pause(3000);
    enterButton.click();
    await browser.pause(3000);
    const inputMail = $(EMAIL_INPUT_SELECTOR);
    inputMail.addValue(USER.USERNAME);
    await browser.pause(3000);
    const inputPassword = $(PASSWORD_INPUT_SELECTOR);
    inputPassword.addValue(USER.PASSWORD);
    await browser.pause(5000);
  });
});
