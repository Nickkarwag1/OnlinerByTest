const USER = { USERNAME: "nick98_molo@icloud.com", PASSWORD: "Kol90407" };
const EMAIL_INPUT_SELECTOR = "//input[@placeholder = 'Ник или e-mail']";
const PASSWORD_INPUT_SELECTOR = "//input[@placeholder = 'Пароль']";
const ENTER_BUTTON_SELECTOR = "//div[text()='Вход']";
const CLICK_TO_COME_IN_BUTTON_SELECTOR = "//button[contains(@class, 'button')]";
const CLICK_USER_PROFILE = "//div[contains(@class,'user-avatar')]";
const CLICK_NAME_USER = "//a[contains(@class,'profile__link')]";
const { expect } = require("chai");
const NAME_USER_IN_PAGE = "//div[contains(@class, 'header__name')]";

describe("Open Page", function () {
  it("Open browser page in url and input login & password", async function () {
    await browser.url("https://www.onliner.by/");
    await browser.pause(2000);
    const enterButton = $(ENTER_BUTTON_SELECTOR);
    await enterButton.click();
    const inputMail = $(EMAIL_INPUT_SELECTOR);
    await inputMail.addValue(USER.USERNAME);
    const inputPassword = $(PASSWORD_INPUT_SELECTOR);
    await inputPassword.addValue(USER.PASSWORD);
    const toComeInButton = $(CLICK_TO_COME_IN_BUTTON_SELECTOR);
    await browser.pause(3000);
    await toComeInButton.click();
    await browser.pause(3000);
    const userProfile = $(CLICK_USER_PROFILE);
    await userProfile.click();
    await browser.pause(1000);
    const userName = $(CLICK_NAME_USER);
    await userName.click();
    await browser.pause(3000);
    const nameInPage = $(NAME_USER_IN_PAGE);
    expect(await nameInPage.isDisplayed()).to.be.true;
  });
});
