import React, { Component } from "react";
import CartBilling from "./cartBilling";
import PlaceOrderHeader from "./placeOrderHeader";
import Product from "./product";

export default class CheckoutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let cartData = this.props.cartInfo.cartData;

    console.log("CheckoutPage CartData", cartData);

    // let products = cartData.values();
    // console.log(products);

    let checkoutProducts = [];

    let mrpPrice = parseInt(this.props.cartInfo.mrpPrice);
    let actualPrice = parseInt(this.props.cartInfo.actualPrice),
      dileveryCharge = parseInt(this.props.cartInfo.dileveryCharge),
      totalCount = parseInt(this.props.cartInfo.totalCount);

    for (let [key, value] of cartData) {
      checkoutProducts.push(
        <Product
          key={key}
          product={value}
          addItemInCart={this.props.cartInfo.addItemInCart}
          removeItemInCart={this.props.cartInfo.removeItemInCart}
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
