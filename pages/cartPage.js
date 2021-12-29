import element from "../element/element";

function isOpenedCart() {
  const titleSelector = `//div[contains(@class, "cart-form__title")]`;
  return element(titleSelector).elementIsDisplayed();
}

function isOpenedProduct() {
  const productSelector = `//a[contains(@class, "cart-form__link_base-alter")and normalize-space(text())='Contrabanda Сырная шаурма']`;
  return element(productSelector).elementIsDisplayed();
}

const CartPage = { isOpenedCart, isOpenedProduct };
export default CartPage;
