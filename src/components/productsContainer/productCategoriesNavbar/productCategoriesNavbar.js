import React from "react";
import ProductCategorie from "./productCategorie";

class ProductCategoriesNavbar extends React.Component {
  render() {
    let { productCategories, changeProductCategorie } = this.props;
    //let { productCategories, changeProductCategorie } = props;

    //console.log("ProductCategoriesNavbar", productCategories);

    // return (
    //   <ul className="productCategoriesNavbar">
    //     {productCategories.map((productCategorie, id) => (
    //       <ProductCategorie
    //         key={id}
    //         id={id}
    //         productCategorie={productCategorie}
    //         // data={props.data}
    //         style={{ border: "2rem solid black" }}
    //         changeProductCategorie={changeProductCategorie}
    //       />
    //     ))}
    //   </ul>
    // );

    const listItems = productCategories.map((productCategorie, id) => {
      //console.log(changeProductCategorie);
      //console.log(changeProductCategorie(productCategorie));
      return (
        <ProductCategorie
          key={id}
          id={id}
          productCategorie={productCategorie}
          // data={props.data}
          changeProductCategorie={changeProductCategorie}
        />
      );
    });

    return <ul className="productCategoriesNavbar"> {listItems}</ul>;
  }
}

export default ProductCategoriesNavbar;
