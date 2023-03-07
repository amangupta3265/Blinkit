import React from "react";
import ProductsInnerContainer from "./productsInnerContainer";
import ProductsSectionHeading from "./productsSectionHeading";

function productSection(props) {
  return (
    <div className="productsSection">
      <ProductsSectionHeading />
      <ProductsInnerContainer
        products={props.products}
        addItemInCart={props.addItemInCart}
        removeItemInCart={props.removeItemInCart}
      />
    </div>
  );
}

export default productSection;
