import element from "../element/element";

const SELECTOR = {
  CART_SELECTOR: `//div[contains(@class, "cart-form__title")]`,
  DELETE_PRODUCT_IN_CART: `//a[contains(@class, "button_remove")]`,
  PAGE_TITLE:
    "//div[contains(@class, \"cart-form__title\") and normalize-space(text())='Корзина']",
};

function isCartOpened() {
  return element(SELECTOR.PAGE_TITLE).isElementDisplayed();
}

function isProductInCard(product) {
  return element(
    `//div[@class='cart-form__offers-unit cart-form__offers-unit_primary']//a[normalize-space(text())='${product}']`
  ).isElementDisplayed();
}

async function deleteProductInCart(product) {
  const elem = element(
    `//a[contains(@class, "cart-form__link_base-alter")and normalize-space(text())='${product}']/../../following-sibling::div[contains(@class,"part_action")]//a[contains(@class, "button_remove")]`
  );
  await elem.moveToElement();
  await elem.clickElement();
}

const CartPage = {
  isCartOpened,
  isProductInCard,
  deleteProductInCart,
};
export default CartPage;
