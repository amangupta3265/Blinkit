function sortProducts(event, products) {
  const value = event.target.options[event.target.selectedIndex].value;

  const sortedProducts = products;

  if (value === "priceLowToHigh") {
    sortedProducts.sort(function (a, b) {
      return a.product__newPrice - b.product__newPrice;
    });
  } else if (value === "priceHighToLow") {
    sortedProducts.sort(function (a, b) {
      return b.product__newPrice - a.product__newPrice;
    });
  }

  return sortedProducts;
}

export { sortProducts };
