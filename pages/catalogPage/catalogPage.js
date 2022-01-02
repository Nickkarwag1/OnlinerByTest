import element from "../../element/element";
import { ITEMS } from "../homePage/components/mainNavigationBar";
import CatalogNavigation from "./components/catalogNavigation";
import BasePage from "../basePage";

const SELECTOR = {
  SCHEMA_TAG: "//*[@id='schema-tags']//div[@class='schema-tags__item']",
  SCHEMA_TAG_TEXT:
    "//*[@id='schema-tags']//div[@class='schema-tags__item']//span",
  ITEM_TITLE:
    '//div[@class="schema-product__group"]//div[@class="schema-product__title"]//span[not(contains(@data-bind,"children"))]',
};

function isOpened() {
  const { CATALOG } = ITEMS;
  return BasePage.isPageOpened(
    CATALOG,
    `//h1[contains(@class, 'catalog-navigation__title') and text()='${CATALOG}']`
  );
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

async function openNeededProduct(productName) {
  const selector = `//span[normalize-space(text())="${productName}"]`;
  await element(selector).moveToElement();
  await element(selector).clickElement();
}

const CatalogPage = {
  isOpened,
  openNeededProduct,
  deleteTagIfExists,
  selectCheckBoxInSection,
  getAllItemTitles,
  CatalogNavigation,
};
export default CatalogPage;
