import element from "../../element/element";

const SELECTOR = {
  SCHEMA_TAG: "//*[@id='schema-tags']//div[@class='schema-tags__item']",
  SCHEMA_TAG_TEXT:
    "//*[@id='schema-tags']//div[@class='schema-tags__item']//span",
  ITEM_TITLE:
    '//div[@class="schema-product__group"]//div[@class="schema-product__title"]//span[not(contains(@data-bind,"children"))]',
};

function isOpened(pageTitle) {
  const pageTitleSelector = `//h1[contains(@class, 'header_title') and text()='${pageTitle}']`;
  return element(pageTitleSelector).elementIsDisplayed();
}

function checkTagsExists() {
  return element(SELECTOR.SCHEMA_TAG).elementIsDisplayed();
}

function getTagText() {
  return element(SELECTOR.SCHEMA_TAG_TEXT).getElementText();
}

async function deleteTagIfExists() {
  if (await checkTagsExists()) {
    const tag = await getTagText();
    await clickCheckboxLeftSideBar(tag);
  }
}

async function clickCheckboxLeftSideBar(itemName) {
  const neededCheckBox = $(
    `//ul[@class='schema-filter__list']//span[@class='schema-filter__checkbox-text' and text()='${itemName}']`
  );
  await neededCheckBox.waitForDisplayed({ timeout: 50000 });
  await neededCheckBox.click();
}

async function selectCheckBoxInSection(sectionName, neededItem) {
  const selector = `//span[text()='${sectionName}']/../..//ul[@class='schema-filter__list']//span[@class='schema-filter__checkbox-text' and text()='${neededItem}']`;
  const elem = element(selector);
  await elem.scrollToElement();
  await elem.clickElement();
}

async function getAllItemTitles() {
  await browser.pause(5000);
  const elements = await $$(SELECTOR.ITEM_TITLE);
  const foundedTitles = [];
  for (let el of elements) {
    const title = await el?.getText();
    foundedTitles.push(title);
  }
  return foundedTitles;
}

const CatalogPage = {
  isOpened,
  deleteTagIfExists,
  selectCheckBoxInSection,
  getAllItemTitles,
};
export default CatalogPage;
