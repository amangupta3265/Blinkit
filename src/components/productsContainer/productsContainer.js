import React from "react";
import ProductCategoriesNavbar from "./productCategoriesNavbar/productCategoriesNavbar";
import ProductsSection from "./productsSection/productSection";

function ProductsContainer(props) {
  return (
    <div className="productsContainer">
      <ProductCategoriesNavbar data={props.data} />
      <ProductsSection data={props.data} />
    </div>
  );
}

export default ProductsContainer;
