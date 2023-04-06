import lodash from "lodash";

function getCartInfo(cartData) {
  let mrpPrice = 0,
    actualPrice = 0,
    cartItemsCount = 0,
    totalCount = 0,
    cartItemsValue = 0;

  lodash.forEach([...cartData], (value, key) => {
    const product = value[1].product;
    const count = value[1].count;
    actualPrice +=
      parseInt(lodash.get(product, "product__newPrice")) * parseInt(count);
    mrpPrice +=
      parseInt(lodash.get(product, "product__oldPrice")) * parseInt(count);
    cartItemsValue = actualPrice;
    cartItemsCount += parseInt(count);
    totalCount = cartItemsCount;
  });

  let displayCartItems = false;

  if (cartData.size > 0) displayCartItems = true;

  const cartInfo = {
    mrpPrice,
    actualPrice,
    cartItemsValue,
    totalCount,
    cartItemsCount,
    displayCartItems,
    cartData,
  };

  return cartInfo;
}

export { getCartInfo };
