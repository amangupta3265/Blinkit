import React, { Component } from "react";
import CartBilling from "./cartBilling";
import PlaceOrderHeader from "./placeOrderHeader";
import Product from "./checkoutProduct";

export default class CheckoutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let cartData = this.props.cartData;

    console.log("CheckoutPage CartData", cartData);

    // let products = cartData.values();
    // console.log(products);

    let checkoutProducts = [];

    let mrpPrice = parseInt(this.props.mrpPrice);
    let actualPrice = parseInt(this.props.actualPrice),
      dileveryCharge = parseInt(this.props.dileveryCharge),
      totalCount = parseInt(this.props.totalCount);

    console.log("dileveryCharge", this.props);

    for (let [key, value] of cartData) {
      let id = value.id;
      let productCategorieId = value.productCategorieId;
      let categorie = value.categorie;
      //console.log("value["product__id"]")
      checkoutProducts.push(
        <Product
          key={key}
          id={id}
          productCategorieId={productCategorieId}
          categorie={categorie}
          product={value.product}
          addItemInCart={this.props.addItemInCart}
          removeItemInCart={this.props.removeItemInCart}
        />
      );
    }

    return (
      <>
        <div className="productsContainer flexColumn ">
          <PlaceOrderHeader totalCount={totalCount} />
          <div className="checkoutProducts">{checkoutProducts}</div>
          <CartBilling
            actualPrice={actualPrice}
            mrpPrice={mrpPrice}
            dileveryCharge={dileveryCharge}
            totalCount={totalCount}
          />
        </div>
      </>
    );
  }
}
