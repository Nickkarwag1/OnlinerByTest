import EnterLogPage from "../pages/enterLogPage";
import LoginPage from "../pages/loginPage";
import CONFIG from "../config";
import EnterHomePage from "../pages/homePage";
const { BASE_URL, USER } = CONFIG;
import { expect } from "chai";
import UsernameInHomePage from "../pages/usernameInHomePage";

describe("Open Page", function () {
  it("Open browser page in url and input login & password", async function () {
    await browser.url(BASE_URL);
    await EnterLogPage.clickLogin();
    await LoginPage.logIn(USER);
    await EnterHomePage.clickNameProfile();
    expect(await UsernameInHomePage.isOpened(),'User was not be able to login to application').to.be.true;
  });
});
