import Product from "../molecules/productsSection/molecules/product";

function createProductComponent(product, id) {
  return <Product product={product} key={product["product__id"]} />;
}

function getProductComponents(products) {
  const productsArray = products.map(createProductComponent);

  return productsArray;
}

export { getProductComponents };
