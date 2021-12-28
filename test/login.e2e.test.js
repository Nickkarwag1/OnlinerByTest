import EnterLogPage from "../pages/enterLogPage";
import LoginPage from "../pages/loginPage";
import CONFIG from "../config/config";
const { BASE_URL, USER } = CONFIG;
import { expect } from "chai";
import UsernameInHomePage from "../pages/usernameInHomePage";
import { maximize, navigateTo } from "../utils/browserActions";
import EnterHomePage from "../pages/homePage";

describe("Onliner test", function () {
  beforeEach(async () => {
    await browser.reloadSession();
    await maximize();
    await navigateTo(BASE_URL);
  });

  it("Open browser page in url and input login & password", async function () {
    await EnterLogPage.clickLogin();
    await LoginPage.logIn(USER);
    await EnterHomePage.clickIconProfile();
    await EnterHomePage.clickNameProfile();
    expect(
      await UsernameInHomePage.isOpened(),
      "User was not be able to login to application"
    ).to.be.true;
  });
});
