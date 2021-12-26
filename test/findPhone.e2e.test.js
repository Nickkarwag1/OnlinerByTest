import EnterLogPage from "../pages/enterLogPage";
import LoginPage from "../pages/loginPage";
import CONFIG from "../config/config";
const { BASE_URL, USER } = CONFIG;
import { expect } from "chai";
import { maximize, navigateTo } from "../utils/browserActions";
import EnterHomePage from "../pages/homePage";
import PhonesPage from "../pages/phonesPage";

const { PHONES } = EnterHomePage.NAVIGATION_BAR_TAB;

describe("Onliner test", function () {
  beforeEach(async () => {
    await browser.reloadSession();
    await maximize();
    await navigateTo(BASE_URL);
  });

  it(`Find ${PHONES}`, async function () {
    const phone = {
      mark: "Apple",
      model: "Iphone",
      year: 2021,
    };

    await EnterLogPage.clickLogin();
    await LoginPage.logIn(USER);
    await EnterHomePage.clickTab(PHONES);
    expect(
      await PhonesPage.isPhonesPageOpened(),
      "Phones page should be opened"
    ).to.be.true;

    // TODO: Implement logic of deletion all tags
    await PhonesPage.deleteTagIfExists();

    const allPhones = await PhonesPage.findPhones(phone);

    validateAllPhonesContainsInTitle(
      allPhones,
      `${phone.mark} ${[phone.model]}`
    );
  });
});

function validateAllPhonesContainsInTitle(phones, strToBeContained) {
  for (let item of phones) {
    const result = item.toUpperCase().includes(strToBeContained.toUpperCase());

    expect(result).to.be.true;
  }
}
