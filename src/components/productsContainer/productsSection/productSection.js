import React from "react";
import ProductsInnerContainer from "./productsInnerContainer";
import ProductsSectionHeading from "./productsSectionHeading";

function productSection(props) {
  return (
    <div className="productsSection">
      <ProductsSectionHeading data={props.data} />
      <ProductsInnerContainer data={props.data} />
    </div>
  );
}

export default productSection;
