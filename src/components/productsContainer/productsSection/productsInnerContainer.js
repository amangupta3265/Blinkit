import React from "react";
import Product from "./product";

function ProductsInnerContainer(props) {
  let { data } = props;

  let categories = Object.keys(data);

  let productCategories = data[categories[0]];

  let products = productCategories[0]["products"];

  let productsArray = products.map((product, id) => {
    return <Product product={product} key={id} />;
  });

  return <div className="products flexRow">{productsArray}</div>;
}

export default ProductsInnerContainer;
