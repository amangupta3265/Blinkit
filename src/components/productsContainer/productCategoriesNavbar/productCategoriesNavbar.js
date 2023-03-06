import React from "react";
import ProductCategorie from "./productCategorie";

function ProductCategoriesNavbar(props) {
  let categories = Object.keys(props.data);

  let productCategories = props.data[categories[0]];

  const listItems = productCategories.map((productCategorie, id) => {
    return (
      <ProductCategorie
        key={id}
        id={id}
        productCategorie={productCategorie}
        data={props.data}
      />
    );
  });

  return <ul className="productCategoriesNavbar">{listItems}</ul>;
}

export default ProductCategoriesNavbar;
