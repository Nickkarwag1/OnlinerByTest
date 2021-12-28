import EnterLogPage from "../pages/enterLogPage";
import LoginPage from "../pages/loginPage";
import CONFIG from "../config/config";
const { BASE_URL, USER } = CONFIG;
import { expect } from "chai";
import UsernameInHomePage from "../pages/usernameInHomePage";
import { maximize, navigateTo } from "../utils/browserActions";
import EnterHomePage from "../pages/homePage";
import HeadCatalogEatPage from "../pages/headCatalogEatPage";
import ContrabandaInstitutionPage from "../pages/contrabandaInstitutionPage";
const { CATALOG } = EnterHomePage.NAVIGATION_BAR_HEAD_PAGE;
const { EAT } = EnterHomePage.NAVIGATION_BAR_CATALOG;
const { SHAURMA } = HeadCatalogEatPage.NAVIGATION_EAT_BAR;

describe("Onliner test", function () {
  beforeEach(async () => {
    await browser.reloadSession();
    await maximize();
    await navigateTo(BASE_URL);
  });

  it("Open only browser page in url, input login & password and adding an item to the cart", async function () {
    await EnterLogPage.clickLogin();
    await LoginPage.logIn(USER);
    await EnterHomePage.clickIconProfile();
    await EnterHomePage.clickNameProfile();
    expect(
      await UsernameInHomePage.isOpened(),
      "User was not be able to login to application"
    ).to.be.true;
    await EnterHomePage.clickSelectorHeadPage(CATALOG);
    await EnterHomePage.clickSelectorCatalogBar(EAT);
    await browser.pause(2000);
    await HeadCatalogEatPage.clickNameInCatalogEatPage(SHAURMA);
    await ContrabandaInstitutionPage.clickButtonOrder();
    await ContrabandaInstitutionPage.clickButtonInCart();
    await browser.pause(2000);
  });
});
