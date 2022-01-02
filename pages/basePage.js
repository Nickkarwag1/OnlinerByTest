import element from "../element/element";
import logger from "../logger/logger";

async function isPageOpened(pageName, selector) {
  if (!selector) {
    return;
  }

  const isOpened = await element(selector).isElementDisplayed();
  if (isOpened) {
    logger.info(`Page ${pageName} is opened`);
    return true;
  } else {
    logger.error(`Page ${pageName} did not opened`);
    return false;
  }
}

async function openCard() {
  await element("//a[@class='b-top-profile__cart']").clickElement();
}

const BasePage = {
  isPageOpened,
  openCard,
};

export default BasePage;
