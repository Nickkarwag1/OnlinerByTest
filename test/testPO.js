import EnterLogPage from "../pages/startPage";
import LoginPage from "../pages/loginPage";

const USER = {
  USERNAME: "nick98_molo@icloud.com",
  PASSWORD: "Kol90407",
};


describe("Open Page", function () {
  it("Open browser page in url and input login & password", async function () {
    await browser.url("https://www.onliner.by/");
    await EnterLogPage.clickLogin();
    await LoginPage.logIn(USER);
  });
});
