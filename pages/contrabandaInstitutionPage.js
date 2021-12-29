import element from "../element/element";
import TestData from "../test/testData";
const { COMPARISON_SHAURMA } = TestData.BUTTON_ORDER_COMPARISON_OF_OFFERS;

const SELECTOR = {
  BUTTON_ORDER: `//a[contains(@title, "${COMPARISON_SHAURMA}")]`,
  BUTTON_THE_CONFIRMATION_CITY: `//span[contains(@class, "offers-form__button")]`,
  BUTTON_IN_CART: `//div[contains(@class,"offers-list__part offers-list__part_action")]//a[contains(@class, "button-style_expletive")]`,
};
async function clickButtonOrder() {
  await element(SELECTOR.BUTTON_ORDER).clickElement();
}

async function clickTheConfirmationCity() {
  const elem = element(SELECTOR.BUTTON_THE_CONFIRMATION_CITY);
  await elem.scrollToElement();
  await elem.clickElement();
}

async function clickButtonInCart() {
  const elem = element(SELECTOR.BUTTON_IN_CART);
  await elem.scrollToElement();
  await elem.clickElement();
  await elem.clickElement();
}

const ContrabandaInstitutionPage = {
  clickButtonOrder,
  clickButtonInCart,
  clickTheConfirmationCity,
};

export default ContrabandaInstitutionPage;
