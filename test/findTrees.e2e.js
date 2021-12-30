import EnterLogPage from "../pages/enterLogPage";
import LoginPage from "../pages/loginPage";
import CONFIG from "../config/config";
const { BASE_URL, USER } = CONFIG;
import { expect } from "chai";
import { maximize, navigateTo } from "../utils/browserActions";
import EnterHomePage from "../pages/homePage/homePage";
import CatalogPage from "../pages/catalogPage/catalogPage";

const { NEW_YEARS_TREES } = EnterHomePage.NAVIGATION_BAR_TAB;

describe("Onliner test", function () {
  beforeEach(async () => {
    await browser.reloadSession();
    await maximize();
    await navigateTo(BASE_URL);
  });

  it(`Find ${NEW_YEARS_TREES}`, async function () {
    await EnterLogPage.clickLogin();
    await LoginPage.logIn(USER);
    await EnterHomePage.clickTab(NEW_YEARS_TREES);
    expect(
      await CatalogPage.isOpened(NEW_YEARS_TREES),
      "Phones page should be opened"
    ).to.be.true;

    await CatalogPage.deleteTagIfExists();

    await CatalogPage.selectCheckBoxInSection("Магазины", "e-dostavka");

    const allTrees = await CatalogPage.getAllItemTitles();
  });
});
