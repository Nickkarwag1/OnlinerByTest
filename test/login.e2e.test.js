import EnterLogPage from "../pages/startPage";
import LoginPage from "../pages/loginPage";
import CONFIG from "../config";
import EnterHomePage from "../pages/homePage";
import SELECTOR from "../pages/homePage";
const { BASE_URL, USER } = CONFIG;
import {expect} from "chai";
const USERNAME_IN_HOMEPAGE = "//div[contains(@class, 'header__name')]";

describe("Open Page", function () {
  it("Open browser page in url and input login & password", async function () {
    await browser.url(BASE_URL);
    await EnterLogPage.clickLogin();
    await browser.pause(1000);
    await LoginPage.logIn(USER);
    await EnterHomePage.clickNameProfile();
    await browser.pause(2000)
    const username = $(USERNAME_IN_HOMEPAGE);
    expect (await username.isDisplayed()).to.be.true;
  });
});
