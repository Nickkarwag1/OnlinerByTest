import element from "../element/element";
import TestData from "../test/testData";
const { PRODUCT_SHAURMA } = TestData.CART;

const SELECTOR = {
  CART_SELECTOR: `//div[contains(@class, "cart-form__title")]`,
  PRODUCT_IN_CART_SELECTOR: `//a[contains(@class, "cart-form__link_base-alter")and normalize-space(text())='${PRODUCT_SHAURMA}']`,
  DELETE_PRODUCT_IN_CART: `//a[contains(@class, "button_remove")]`,
  REMOTE_PRODUCT: `//div[contains(@class, "cart-form__description_condensed-extra")and normalize-space(text())='Вы удалили ${PRODUCT_SHAURMA}']`
};

function isOpenedCart() {
  return element(SELECTOR.CART_SELECTOR).waitForElementDisplayed();
}

function isOpenedProduct() {
  return element(SELECTOR.PRODUCT_IN_CART_SELECTOR).waitForElementDisplayed();
}

async function deleteProductInCart() {
  const elem =  element(SELECTOR.DELETE_PRODUCT_IN_CART);
  await elem.moveToElement();
  await elem.clickElement();
}

function isOpenedRemoteProduct(){
  return element(SELECTOR.REMOTE_PRODUCT).waitForElementDisplayed();
}

const CartPage = { isOpenedCart, isOpenedProduct, deleteProductInCart, isOpenedRemoteProduct };
export default CartPage;
