import element from "../element/element";

async function clickButtonOrder() {
  const selector = `//a[contains(@title, "Сравнение предложений на Contrabanda Сырная шаурма")]`;
  await element(selector).clickElement();
}

async function clickTheConfirmationCity() {
  const selectorButton = `//span[contains(@class, "offers-form__button")]`;
  const elem = element(selectorButton);
  await elem.scrollToElement();
  await elem.clickElement();
}

async function clickButtonInCart() {
  const selector = `//div[contains(@class,"offers-list__part offers-list__part_action")]//a[contains(@class, "button-style_expletive")]`;
  const elem = element(selector);
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
