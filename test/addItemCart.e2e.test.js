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
import TestData from "./testData";
import CartPage from "../pages/cartPage";
const { CATALOG } = TestData.NAVIGATION_BAR_HEAD_PAGE;
const { EAT } = TestData.NAVIGATION_BAR_CATALOG;
const { SHAURMA } = TestData.NAVIGATION_EAT_BAR;

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
    await ContrabandaInstitutionPage.clickTheConfirmationCity();
    await ContrabandaInstitutionPage.clickButtonInCart();
    expect(await CartPage.isOpenedCart(), "Carts page should be opened").to.be
      .true;
    expect(
      await CartPage.isOpenedProduct(),
      "Product in carts page should be opened"
    ).to.be.true;
  });
});
