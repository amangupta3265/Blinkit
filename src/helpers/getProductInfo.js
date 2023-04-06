function getProductInfo(cartData, productId) {
  let productCount = 0;
  let showCounter = false;

  if (cartData.get(productId)) {
    productCount = cartData.get(productId).count;
    showCounter = true;
  }

  return { productCount, showCounter };
}

export { getProductInfo };
