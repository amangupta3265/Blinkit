let filter = (products, value) => {
  console.log(value);

  let productsDiv = document.querySelector(".products");
  productsDiv.innerHTML = "";

  if (value === "priceLowToHigh") {
    products.sort(function (a, b) {
      return a.product__newPrice - b.product__newPrice;
    });
    //addProduct(products);

    for (let k = 0; k < products.length; k++) {
      let product = productElement(products[k]);
      productsDiv.appendChild(product);
    }

    addProduct(products);
  } else if (value === "priceHighToLow") {
    products.sort(function (a, b) {
      return b.product__newPrice - a.product__newPrice;
    });
    addProduct(products);

    for (let k = 0; k < products.length; k++) {
      let product = productElement(products[k]);
      productsDiv.appendChild(product);
    }

    addProduct(products);
  }
};

export default filter;
