import React from "react";
import ProductCategoriesNavbar from "./productCategoriesNavbar/productCategoriesNavbar";
import ProductsSection from "./productsSection/productSection";
import { DataContext } from "../dataContex";
// import data from "../../json/data";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productCategorie: "All",
      id: 0,
      categorie: "Vegetables & fruits",
    };

    this.changeProductCategorie = this.changeProductCategorie.bind(this);
  }

  changeProductCategorie = (e, id, productCategorie) => {
    e.preventDefault();
    //console.log("call from", productCategorie);

    this.setState({
      id: id,
      // categorie: this.props.categorie,
    });
  };

  incrementCount = () => {
    console.log(this.state.count);

    //let data1 = data[categorie][id]["products"][0];

    this.setState((prevState) => ({
      count: parseInt(prevState.count) + 1,
    }));

    this.props.addItemInCart(this.props.product.product__newPrice);
  };

  decrementCount = () => {
    this.setState(
      (prevState) => ({
        count: parseInt(prevState.count) - 1,
      }),
      () => {
        if (this.state.count === 0) {
          this.setState({
            showCounter: false,
          });
        }
      }
    );

    this.props.removeItemInCart(this.props.product.product__newPrice);
  };

  displayCounter = () => {
    console.log("from child");
    this.setState({
      count: 1,
      showCounter: true,
    });

    this.props.addItemInCart(this.props.product.product__newPrice);
  };

  render() {
    //let categories = Object.keys(this.props.data);
    var categorie = this.props.categorie;
    var id = parseInt(this.state.id);
    //console.log(id);

    //console.log(DataConsumer);
    return (
      <>
        <DataContext.Consumer>
          {(value) => {
            //console.log(value);
            let data = value;
            //console.log("data", data);
            let productCategories = data[categorie];
            //console.log("productCategories", productCategories);
            let products = productCategories[id]["products"];
            let productCategorie =
              productCategories[id]["productCategory__name"];

            let data1 = data[categorie][id]["products"][0];

            //console.log(data1);

            return (
              <div className="productsContainer">
                <ProductCategoriesNavbar
                  changeProductCategorie={this.changeProductCategorie}
                  productCategories={productCategories}
                />
                <ProductsSection
                  incrementCount={this.incrementCount}
                  products={products}
                  data={data}
                  productCategorie={productCategorie}
                  categorie={categorie}
                  id={id}
                  addItemInCart={this.props.addItemInCart}
                  removeItemInCart={this.props.removeItemInCart}
                />
              </div>
            );
          }}
        </DataContext.Consumer>
        ;
      </>
    );
  }
}

export default ProductsContainer;
