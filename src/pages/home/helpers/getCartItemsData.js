import lodash from "lodash";

function getCartItemsData(cartData) {
  let cartItemsCount = 0,
    cartItemsValue = 0;

  let displayCartItems = false;

  if (cartData.size > 0) displayCartItems = true;

  lodash.forEach([...cartData], (value) => {
    const productObj = value[1];
    const productCount = lodash.get(productObj, "count");
    cartItemsValue +=
      parseInt(lodash.get(productObj, ["product", "product__newPrice"])) *
      parseInt(productCount);

    cartItemsCount += parseInt(productCount);
  });

  return { cartItemsCount, cartItemsValue, displayCartItems };
}

export { getCartItemsData };
