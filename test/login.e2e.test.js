import EnterLogPage from "../pages/startPage";
import LoginPage from "../pages/loginPage";
import CONFIG from "../config";
import EnterHomePage from "../pages/homePage";
import SELECTOR from "../pages/homePage";
const { BASE_URL, USER } = CONFIG;
const { USERNAME_IN_HOMEPAGE } = SELECTOR;

describe("Open Page", function () {
  it("Open browser page in url and input login & password", async function () {
    await browser.url(BASE_URL);
    await EnterLogPage.clickLogin();
    await browser.pause(1000);
    await LoginPage.logIn(USER);
    await EnterHomePage.clickNameProfile();
    await browser.pause(6000)
    expect (await USERNAME_IN_HOMEPAGE.isDisplayed()).to.be.true
  });
});
