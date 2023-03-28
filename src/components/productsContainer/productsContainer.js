import React from "react";
import ProductCategoriesNavbar from "./productCategoriesNavbar/productCategoriesNavbar";
import ProductsSection from "./productsSection/productSection";
import { DataContext } from "../dataContex";
//import data from "../../json/data";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productCategorie: "All",
      id: this.props.id,
      categorie: "Vegetables & fruits",
      data: this.props.data,
      count: 0,
      showCounter: false,
    };

    this.changeProductCategorie = this.changeProductCategorie.bind(this);
  }

  changeProductCategorie = (e, id, productCategorie) => {
    //e.preventDefault();
    console.log("call from", productCategorie, "with id", id);

    this.setState({
      id: id,
      productCategorie: productCategorie["productCategory__name"],
      // categorie: this.props.categorie,
    });
  };

  incrementCount = (id) => {
    console.log("incrementCount for product id :", id);
    //console.log("incrementCount", this.state.count);
    //console.log("incrementCount for product", this.props.product);
    let data2 = this.state.data;

    let count = parseInt(
      this.state.data[this.props.categorie][this.state.id]["products"][id][
        "count"
      ]
    );

    data2[this.props.categorie][this.state.id]["products"][id]["count"] =
      count + 1;

    this.setState(() => ({
      data: data2,
    }));

    let value =
      this.state.data[this.props.categorie][this.state.id]["products"][id][
        "product__newPrice"
      ];

    let product =
      this.state.data[this.props.categorie][this.state.id]["products"][id];

    this.props.addItemInCart(value, product);
  };

  decrementCount = (id) => {
    let data2 = this.state.data;

    let count = parseInt(
      this.state.data[this.props.categorie][this.state.id]["products"][id][
        "count"
      ]
    );

    data2[this.props.categorie][this.state.id]["products"][id]["count"] =
      count - 1;

    this.setState(
      () => ({
        data: data2,
      }),
      () => {
        if (count === 0) {
          this.setState({
            showCounter: false,
          });
        }
      }
    );

    let value =
      this.state.data[this.props.categorie][this.state.id]["products"][id][
        "product__newPrice"
      ];
    let product =
      this.state.data[this.props.categorie][this.state.id]["products"][id];

    this.props.removeItemInCart(value, product);
  };

  displayCounter = (id) => {
    console.log("displayCounter", id);

    let data2 = this.state.data;

    data2[this.props.categorie][this.state.id]["products"][id]["count"] = 1;

    this.setState({
      data: data2,
      showCounter: true,
    });

    let value =
      this.state.data[this.props.categorie][this.state.id]["products"][id][
        "product__newPrice"
      ];

    let product =
      this.state.data[this.props.categorie][this.state.id]["products"][id];

    this.props.addItemInCart(value, product);
  };

  changeCategorie = (categorie) => {
    console.log("CHANGE to", categorie, "from", this.state.categorie);
    this.setState({
      categorie: categorie,
      id: 0,
    });
  };

  render() {
    console.log("ProductsContainer render");
    let categorie = this.props.categorie;

    if (categorie !== this.state.categorie) {
      this.changeCategorie(categorie);
    }

    return (
      <>
        <DataContext.Consumer>
          {(value) => {
            //console.log(value);

            if (!value) {
              return new Error("Something went wrong");
            }

            let id = parseInt(this.state.id);

            if (categorie !== this.state.categorie) {
              id = 0;
            }

            console.log("id", id);

            let data = this.state.data;
            //console.log("data", data);
            let productCategories = data[categorie];
            //console.log("productCategories", productCategories);
            let products = productCategories[id]["products"];
            let productCategorie =
              productCategories[id]["productCategory__name"];

            return (
              <div className="productsContainer">
                <ProductCategoriesNavbar
                  changeProductCategorie={this.changeProductCategorie}
                  productCategories={productCategories}
                />
                <ProductsSection
                  incrementCount={this.incrementCount}
                  decrementCount={this.decrementCount}
                  showCounter={this.state.showCounter}
                  displayCounter={this.displayCounter}
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
