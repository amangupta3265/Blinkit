import React from "react";
import ProductCategoriesNavbar from "./productCategoriesNavbar/productCategoriesNavbar";
import ProductsSection from "./productsSection/productSection";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productCategorie: "All",
      id: 0,
    };

    this.changeProductCategorie = this.changeProductCategorie.bind(this);
  }

  changeProductCategorie = (e, id) => {
    e.preventDefault();
    //console.log("call from", productCategorie);

    this.setState({
      id: id,
    });
  };

  render() {
    //let categories = Object.keys(this.props.data);

    let categorie = this.props.categorie;

    console.log(categorie);

    let productCategories = this.props.data[categorie];

    let id = this.state.id;
    console.log(id);
    let products = productCategories[id]["products"];

    console.log("from ProductsContainer", productCategories);

    return (
      <div className="productsContainer">
        <ProductCategoriesNavbar
          changeProductCategorie={this.changeProductCategorie}
          productCategories={productCategories}
        />
        <ProductsSection
          products={products}
          addItemInCart={this.props.addItemInCart}
          removeItemInCart={this.props.removeItemInCart}
        />
      </div>
    );
  }
}

export default ProductsContainer;
