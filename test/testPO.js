import { SELECTORS, USER } from "../patternPageObject/pages/startPage";
import { enterLogPage } from "../patternPageObject/pages/startPage";
import LoginPage from "../patternPageObject/pages/loginPage";

describe("Open Page", function () {
  it("Open browser page in url and input login & password", async function () {
    await browser.url("https://www.onliner.by/");
    await browser.pause(2000);
    await enterLogPage.enter(SELECTORS);
    await LoginPage.logIn(USER);
  });
});