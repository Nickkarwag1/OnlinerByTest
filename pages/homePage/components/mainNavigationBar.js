import element from "../../../element/element";

const ITEMS = {
  CATALOG: "Каталог",
  NEWS: "Новости",
};

async function openItem(selectorName) {
  const headPageSelector = `//span[contains(@class, "navigation__text") and text() = "${selectorName}"]`;
  await element(headPageSelector).clickElement();
}

const MainNavigationBar = {
  openItem,
};

export default MainNavigationBar;
export { ITEMS };
