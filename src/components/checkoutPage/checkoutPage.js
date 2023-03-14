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
    // let products = [
    //   {
    //     product__image: "./potato.jpeg",
    //     product__offer: "10% OFF",
    //     product__sourced: "sourced at : 5am",
    //     product__name: "Aloo",
    //     product__weight: "1Kg",
    //     product__newPrice: "15",
    //     product__oldPrice: "20",
    //     count: 0,
    //   },
    //   {
    //     product__image: "./potato.jpeg",
    //     product__offer: "10% OFF",
    //     product__sourced: "sourced at : 5am",
    //     product__name: "Aloo",
    //     product__weight: "1Kg",
    //     product__newPrice: "15",
    //     product__oldPrice: "20",
    //     count: 0,
    //   },
    //   {
    //     product__image: "./potato.jpeg",
    //     product__offer: "10% OFF",
    //     product__sourced: "sourced at : 5am",
    //     product__name: "Aloo",
    //     product__weight: "1Kg",
    //     product__newPrice: "15",
    //     product__oldPrice: "20",
    //     count: 0,
    //   },
    //   {
    //     product__image: "./potato.jpeg",
    //     product__offer: "10% OFF",
    //     product__sourced: "sourced at : 5am",
    //     product__name: "Aloo",
    //     product__weight: "1Kg",
    //     product__newPrice: "15",
    //     product__oldPrice: "20",
    //     count: 0,
    //   },
    //   {
    //     product__image: "./potato.jpeg",
    //     product__offer: "10% OFF",
    //     product__sourced: "sourced at : 5am",
    //     product__name: "Aloo",
    //     product__weight: "1Kg",
    //     product__newPrice: "15",
    //     product__oldPrice: "20",
    //     count: 0,
    //   },
    //   {
    //     product__image: "./potato.jpeg",
    //     product__offer: "10% OFF",
    //     product__sourced: "sourced at : 5am",
    //     product__name: "Aloo",
    //     product__weight: "1Kg",
    //     product__newPrice: "15",
    //     product__oldPrice: "20",
    //     count: 0,
    //   },
    //   {
    //     product__image: "./potato.jpeg",
    //     product__offer: "10% OFF",
    //     product__sourced: "sourced at : 5am",
    //     product__name: "Aloo",
    //     product__weight: "1Kg",
    //     product__newPrice: "15",
    //     product__oldPrice: "20",
    //     count: 0,
    //   },
    //   {
    //     product__image: "./potato.jpeg",
    //     product__offer: "10% OFF",
    //     product__sourced: "sourced at : 5am",
    //     product__name: "Aloo",
    //     product__weight: "1Kg",
    //     product__newPrice: "15",
    //     product__oldPrice: "20",
    //     count: 0,
    //   },
    //   {
    //     product__image: "./potato.jpeg",
    //     product__offer: "10% OFF",
    //     product__sourced: "sourced at : 5am",
    //     product__name: "Aloo",
    //     product__weight: "1Kg",
    //     product__newPrice: "15",
    //     product__oldPrice: "20",
    //     count: 0,
    //   },
    // ];

    let cartData = this.props.cartData;

    console.log("CheckoutPage CartData", cartData);

    // let products = cartData.values();
    // console.log(products);

    let checkoutProducts = [];

    let mrpPrice = parseInt(this.props.mrpPrice);
    let actualPrice = parseInt(this.props.actualPrice),
      dileveryCharge = parseInt(this.props.dileveryCharge),
      totalCount = parseInt(this.props.totalCount);

    for (let [key, value] of cartData) {
      checkoutProducts.push(
        <Product
          key={key}
          product={value}
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
