const SELECTOR = {
  ICON_USER_PROFILE: "//a[contains(@class, 'profile__preview')]",
  NAME_USER_PROFILE:
    "//a[@href='https://profile.onliner.by' and contains(@class, 'profile__link_alter')]",

};

const NAVIGATION_BAR_TAB = {
  PHONES : 'Смартфоны',
  NEW_YEARS_TREES : 'Новогодние елки'
}

async function clickTab(tabName){
  const NAVIGATION_BAR_SELECTOR = `//span[contains(@class, "project-navigation__sign") and text()="${tabName}"]`;
  const element = $(NAVIGATION_BAR_SELECTOR);
  await element.waitForClickable()
  await element.click();
}

async function clickNameProfile() {
  await $(SELECTOR.ICON_USER_PROFILE).click();
  await $(SELECTOR.NAME_USER_PROFILE).click();
}

const EnterHomePage = { clickNameProfile , clickTab, NAVIGATION_BAR_TAB };
export default EnterHomePage;
