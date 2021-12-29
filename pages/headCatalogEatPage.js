import element from "../element/element";

async function clickNameInCatalogEatPage(nameTab) {
  const selector = `//div[contains(@class, "aside-title")and text()=" ${nameTab} "]`;
  await element(selector).clickElement();
  const selectorInstitution = `//div[contains(@class, "aside-title")and text()=" ${nameTab} "]/following-sibling::div//span[contains(@class,"dropdown-title") and text()=" Contrabanda (Могилёв) "]`;
  await element(selectorInstitution).clickElement();
}

const HeadCatalogEatPage = { clickNameInCatalogEatPage };
export default HeadCatalogEatPage;
