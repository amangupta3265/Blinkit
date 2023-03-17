import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addItemInCart,
  removeItemInCart,
} from "../../../redux/cart/cartActions";
import {
  decrementCount,
  incrementCount,
} from "../../../redux/product/productActions";
import product from "./product";

class ProductButton extends Component {
  handleIncrement = (id, product) => {
    //this.props.incrementCount(id, product);
    console.log("value", product["product__newPrice"]);
    let value = this.props.product["product__newPrice"];
    // console.log(
    //   "handleIncrement",
    //   "value",
    //   value,
    //   "id",
    //   id,
    //   "product",
    //   product,
    //   "categorie",
    //   this.props.categorie,
    //   "productCategorieId",
    //   this.props.productCategorieId
    // );

    let productObj = {
      id: this.props.id,
      value: value,
      product: this.props.product,
      categorie: this.props.categorie,
      productCategorieId: this.props.productCategorieId,
    };

    this.props.incrementCount(productObj);
    this.props.addItemInCart(productObj);
  };

  handleDecrement = (id, product) => {
    console.log("handleDecrement", product);
    console.log("value", product["product__newPrice"]);
    let value = this.props.product["product__newPrice"];

    let productObj = {
      id: this.props.id,
      value: value,
      product: this.props.product,
      categorie: this.props.categorie,
      productCategorieId: this.props.productCategorieId,
    };

    this.props.decrementCount(productObj);
    this.props.removeItemInCart(productObj);
  };

  handleDisplayCounter = (id, product) => {
    this.props.displayCounter(id);
    this.handleIncrement(id, product);
  };

  render() {
    console.log(
      "ProductButton",
      this.props.categorie,
      this.props.productCategorieId
    );
    return (
      <div className="product__quantity">
        <button
          className="btn-add"
          onClick={() =>
            this.handleDisplayCounter(this.props.id, this.props.product)
          }
          style={{ display: this.props.showCounter ? "none" : "block" }}
        >
          ADD
        </button>
        <button
          className="btn-number"
          style={{ display: this.props.showCounter ? "block" : "none" }}
        >
          <span
            className="decrementQuantity"
            id="decrement"
            onClick={() =>
              this.handleDecrement(this.props.id, this.props.product)
            }
          >
            -
          </span>
          <span id="count_0">{this.props.count}</span>
          <span
            className="incrementQuantity"
            id="increment"
            onClick={() =>
              this.handleIncrement(this.props.id, this.props.product)
            }
          >
            +
          </span>
        </button>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemInCart: (value, product) => dispatch(addItemInCart(value, product)),
    removeItemInCart: (value, product) =>
      dispatch(removeItemInCart(value, product)),
    incrementCount: (productObj) => dispatch(incrementCount(productObj)),
    decrementCount: (productObj) => dispatch(decrementCount(productObj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductButton);
