import lodash from "lodash";

function sortProducts(event, products) {
  const value = event.target.options[event.target.selectedIndex].value;

  const sortedProducts = products;

  if (value === "priceLowToHigh") {
    lodash.sort(sortedProducts, function (a, b) {
      return (
        lodash.get(a, "product__newPrice") - lodash.get(b, "product__newPrice")
      );
    });
  } else if (value === "priceHighToLow") {
    lodash.sort(sortedProducts, function (a, b) {
      return (
        lodash.get(b, "product__newPrice") - lodash.get(a, "product__newPrice")
      );
    });
  }

  return sortedProducts;
}

export { sortProducts };
