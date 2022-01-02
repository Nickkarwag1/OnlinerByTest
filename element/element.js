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
    await el.waitForClickable({ timeout: 20000 });
    await el.click();
  }

  async function isElementDisplayed({ timeout, reverse } = {}) {
    logger.debug(`Waiting to be ${reverse ? "hidden" : "visible"}`);
    let errorMessage = reverse
      ? "Still displayed"
      : `Didn't apper in ${timeout} ms`;

    try {
      const element = await $(selector);

      return await element.waitForDisplayed({
        timeout,
        reverse,
        timeoutMsg: errorMessage,
      });
    } catch (error) {
      logger.error(`"${selector}" - ${errorMessage}`);
      return false;
    }
  }

  async function elementIsDisplayed() {
    return el.isDisplayed();
  }

  async function moveToElement() {
    await el.moveTo();
  }
  return {
    getElementText,
    setValue,
    clickElement,
    scrollToElement,
    elementIsDisplayed,
    isElementDisplayed,
    moveToElement,
  };
}
