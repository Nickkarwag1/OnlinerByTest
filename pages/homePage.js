const SELECTOR = {
  ICON_USER_PROFILE: "//a[contains(@class, 'profile__preview')]",
  NAME_USER_PROFILE:
    "//a[@href='https://profile.onliner.by' and contains(@class, 'profile__link_alter')]",
  USERNAME_IN_HOMEPAGE: "//div[contains(@class, 'header__name')]",
};

async function clickNameProfile() {
  await $(SELECTOR.ICON_USER_PROFILE).click();
  await browser.pause(1000);
  await $(SELECTOR.NAME_USER_PROFILE).click();
}

const EnterHomePage = { clickNameProfile };
export default EnterHomePage;