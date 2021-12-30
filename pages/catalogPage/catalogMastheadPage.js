import element from "../../element/element";

function getPageTitle() {
  return element("//h1[@class='catalog-masthead__title']").getElementText();
}

async function addToCard() {
  await element("//a[text()='В корзину']").clickElement();
}

const CatalogMastheadPage = { getPageTitle, addToCard };
export default CatalogMastheadPage;
