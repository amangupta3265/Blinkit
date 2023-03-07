import React from "react";
import Product from "./product";

function ProductsInnerContainer(props) {
  let { products } = props;

  let productsArray = products.map((product, id) => {
    return (
      <Product
        product={product}
        key={id}
        addItemInCart={props.addItemInCart}
        removeItemInCart={props.removeItemInCart}
      />
    );
  });

  return <div className="products flexRow">{productsArray} </div>;
}

export default ProductsInnerContainer;
