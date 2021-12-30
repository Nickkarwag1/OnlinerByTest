import element from "../../../element/element";

// TODO: Add extra items
const CATEGORIES = {
  ELECTROINC: "Электроника",
  EATS: "Еда",
};

const SELECTORS = {
  ASIDE_ITEM: '//div[contains(@class, "aside-title")',
};

async function openCategory(category) {
  if (!Object.values(CATEGORIES).includes(category)) {
    throw Error(`Category '${category}' is unsupported`);
  }
  const selector = `//span[contains(@class, "catalog-navigation-classifier__item-title-wrapper") and text() = "${category}"]`;
  await element(selector).clickElement();
}

async function selectItemInAsideList(nameTab, productName) {
  if (!nameTab || !productName) {
    throw Error("Please provide name of tab and product to select");
  }
  const selector = `//div[contains(@class, "aside-title")and text()=" ${nameTab} "]`;
  await element(selector).moveToElement();
  await element(selector).clickElement();
  const selectorInstitution = `//div[contains(@class, "aside-title")and text()=" ${nameTab} "]/following-sibling::div//span[contains(@class,"dropdown-title") and normalize-space(text())="${productName}"]`;
  await element(selectorInstitution).clickElement();
}

const CatalogNavigation = { openCategory, selectItemInAsideList };
export default CatalogNavigation;
export { CATEGORIES };
