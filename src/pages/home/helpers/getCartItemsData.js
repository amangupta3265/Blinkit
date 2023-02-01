import lodash from "lodash";

function getCartItemsData(cartData) {
  let cartItemsCount = 0,
    cartItemsValue = 0;

  let displayCartItems = false;

  if (cartData.size > 0) displayCartItems = true;

  lodash.forEach([...cartData], (value) => {
    const productObj = value[1];
    cartItemsValue +=
      parseInt(productObj.product["product__newPrice"]) *
      parseInt(productObj.count);

    cartItemsCount += parseInt(productObj.count);
  });

  return { cartItemsCount, cartItemsValue, displayCartItems };
}

export { getCartItemsData };
