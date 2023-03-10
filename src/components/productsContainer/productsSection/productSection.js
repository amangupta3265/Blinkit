import React from "react";
import ProductsInnerContainer from "./productsInnerContainer";
import ProductsSectionHeading from "./productsSectionHeading";

function productSection(props) {
  console.log("from productSection", props.categorie);
  return (
    <div className="productsSection">
      <ProductsSectionHeading />
      <ProductsInnerContainer
        incrementCount={props.incrementCount}
        decrementCount={props.decrementCount}
        showCounter={props.showCounter}
        displayCounter={props.displayCounter}
        data={props.data}
        products={props.products}
        productCategorie={props.productCategorie}
        categorie={props.categorie}
        addItemInCart={props.addItemInCart}
        removeItemInCart={props.removeItemInCart}
      />
    </div>
  );
}

export default productSection;
