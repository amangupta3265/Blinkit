import React from "react";
import ProductCategorie from "./productCategorie";

class ProductCategoriesNavbar extends React.Component {
  render() {
    let { productCategories, changeProductCategorie } = this.props;

    console.log("ProductCategoriesNavbar", productCategories);

    productCategories = Object.values(productCategories);

    const listItems = productCategories.map((productCategorie, id) => {
      //console.log("productCategorie", productCategorie);
      return (
        <ProductCategorie
          key={id}
          id={id}
          productCategorie={productCategorie}
          changeProductCategorie={changeProductCategorie}
        />
      );
    });

    // const listItems = [];

    // for (let [key, value] of ) {
    //   listItems.push(
    //     <ProductCategorie
    //       key={key}
    //       id={key}
    //       productCategorie={value}
    //       changeProductCategorie={changeProductCategorie}
    //     />
    //   );
    // }

    return <ul className="productCategoriesNavbar"> {listItems}</ul>;
  }
}

export default ProductCategoriesNavbar;
