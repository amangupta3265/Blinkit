function getCartInfo(cartData) {
  let mrpPrice = 0,
    actualPrice = 0,
    cartItemsCount = 0,
    totalCount = 0,
    cartItemsValue = 0;

  cartData.forEach((value, key) => {
    const product = value.product;
    const count = value.count;
    actualPrice += parseInt(product["product__newPrice"]) * parseInt(count);
    mrpPrice += parseInt(product["product__oldPrice"]) * parseInt(count);
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
