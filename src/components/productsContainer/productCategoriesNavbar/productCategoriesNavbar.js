import React from "react";
import ProductCategorie from "./productCategorie";

class ProductCategoriesNavbar extends React.Component {
  render() {
    let { productCategories, changeProductCategorie } = this.props;

    const listItems = productCategories.map((productCategorie, id) => {
      return (
        <ProductCategorie
          key={id}
          id={id}
          productCategorie={productCategorie}
          changeProductCategorie={changeProductCategorie}
        />
      );
    });

    return <ul className="productCategoriesNavbar"> {listItems}</ul>;
  }
}

export default ProductCategoriesNavbar;
