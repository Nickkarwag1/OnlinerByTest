import element from "../element/element";

const SELECTOR = {
  ICON_USER_PROFILE: "//a[contains(@class, 'profile__preview')]",
  NAME_USER_PROFILE:
    "//a[@href='https://profile.onliner.by' and contains(@class, 'profile__link_alter')]",
};

const NAVIGATION_BAR_TAB = {
  PHONES: "Смартфоны",
  NEW_YEARS_TREES: "Новогодние елки",
};

async function clickSelectorHeadPage(selectorName) {
  const headPageSelector = `//span[contains(@class, "navigation__text") and text() = "${selectorName}"]`;
  await element(headPageSelector).clickElement();
}

async function clickSelectorCatalogBar(nameBar) {
  const selectorBar = `//span[contains(@class, "catalog-navigation-classifier__item-title-wrapper") and text() = "${nameBar}"]`;
  await element(selectorBar).clickElement();
}

async function clickTab(tabName) {
  const NAVIGATION_BAR_SELECTOR = `//span[contains(@class, "project-navigation__sign") and text()="${tabName}"]`;
  const element = $(NAVIGATION_BAR_SELECTOR);
  await element.waitForClickable();
  await element.click();
}

async function clickIconProfile() {
  await element(SELECTOR.ICON_USER_PROFILE).clickElement();
}

async function clickNameProfile() {
  await element(SELECTOR.NAME_USER_PROFILE).clickElement();
}

const EnterHomePage = {
  clickNameProfile,
  clickTab,
  NAVIGATION_BAR_TAB,
  clickIconProfile,
  clickSelectorHeadPage,
  clickSelectorCatalogBar,
};
export default EnterHomePage;
