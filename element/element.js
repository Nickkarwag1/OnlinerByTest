import logger from "../logger/logger";

export default function element(selector) {
  const el = $(selector);

  async function scrollToElement() {
    logger.info("Scrolling to element");
    await el.scrollIntoView();
  }

  async function getElementText() {
    const text = await el.getText();
    logger.info(`Element test is "${text}"`);
    return text;
  }

  async function setValue(value) {
    logger.info(`Setting value ${value} in element xpath: ${selector}`);
    await el.waitForEnabled();
    await el.addValue(value);
  }

  async function clickElement() {
    logger.info(`Click by element xpath: ${selector}`);
    await el.waitForClickable();
    await el.click();
  }

  async function waitForElementDisplayed(){
    return el.waitForDisplayed();
  }

  async function elementIsDisplayed() {
    return el.isDisplayed();
  }

  async function moveToElement(){
    await el.moveTo();
  }
  return {
    getElementText,
    setValue,
    clickElement,
    scrollToElement,
    elementIsDisplayed,
    waitForElementDisplayed,
    moveToElement,
  };
}
