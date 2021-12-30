import EnterLogPage from "../pages/enterLogPage";
import LoginPage from "../pages/loginPage";
import CONFIG from "../config/config";
const { BASE_URL, USER } = CONFIG;
import { expect } from "chai";
import UsernameInHomePage from "../pages/usernameInHomePage";
import { reloadSession, maximize, navigateTo } from "../utils/browserActions";
import EnterHomePage from "../pages/homePage/homePage";
import CartPage from "../pages/cartPage";
import { ITEMS } from "../pages/homePage/components/mainNavigationBar";
import CatalogPage from "../pages/catalogPage/catalogPage";
import CatalogMastheadPage from "../pages/catalogPage/catalogMastheadPage";
import BasePage from "../pages/basePage";

const { CATEGORY, SUBCATEGORY, CAFE, PRODUCT } = SHAURMA;

describe("Product Card Test only", function () {
  before(async () => {
    await reloadSession();
    await maximize();
    await navigateTo(BASE_URL);
  });

  it("User should be logged in", async function () {
    expect(await EnterLogPage.isOpened()).to.be.true;

    await EnterLogPage.clickLogin();
    await LoginPage.logIn(USER);

    await EnterHomePage.openUserProfile();

    expect(
      await UsernameInHomePage.getUserName(),
      "User was not be able to login to application"
    ).to.eql(USER.USERNAME);
  });

  it("Catalog should be opened", async function () {
    await EnterHomePage.MainNavigationBar.openItem(ITEMS.CATALOG);
    expect(await CatalogPage.isOpened()).to.be.true;
  });

  it("Category should be opened", async function () {
    await CatalogPage.CatalogNavigation.openCategory(CATEGORY);
    await CatalogPage.CatalogNavigation.selectItemInAsideList(
      SUBCATEGORY,
      CAFE
    );
  });

  it("Product should be opened", async function () {
    await CatalogPage.openNeededProduct(PRODUCT);
    const pageTitle = await CatalogMastheadPage.getPageTitle();
    expect(pageTitle).to.eql(PRODUCT);
  });

  it("Product should be added to card", async function () {
    await CatalogMastheadPage.addToCard();
    await BasePage.openCard();

    expect(await CartPage.isCartOpened(), "Carts page should be opened").to.be
      .true;

    expect(
      await CartPage.isProductInCard(PRODUCT),
      "Product in carts page should be opened"
    ).to.be.true;
  });

  it("Product should be deleted from card", async function () {
    await CartPage.deleteProductInCart(PRODUCT);

    expect(
      await CartPage.isProductInCard(PRODUCT),
      "Product in carts page should be opened"
    ).to.be.false;
  });
});
