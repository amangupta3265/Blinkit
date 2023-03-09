import React, { Component } from "react";
import Product from "./product";

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

    // console.log("mrpPrice", mrpPrice);
    // console.log("actualPrice", actualPrice);
    // console.log("dileveryCharge", dileveryCharge);
    // console.log("totalCount", totalCount);

    //for (let value of cartData.values()) {
    for (let [key, value] of cartData) {
      //console.log(value);
      //   totalCount++;
      //   actualPrice += parseInt(value["product__newPrice"]);
      //   mrpPrice += parseInt(value["product__oldPrice"]);
      checkoutProducts.push(
        <Product
          key={key}
          product={value}
          addItemInCart={this.props.addItemInCart}
          removeItemInCart={this.props.removeItemInCart}
        />
      );
    }

    // const checkoutProducts = cartData.forEach((key, value) => {
    //   console.log(key + " = " + value);
    //   return (
    //     <Product
    //       key={value}
    //       product={key}
    //       addItemInCart={this.props.addItemInCart}
    //       removeItemInCart={this.props.removeItemInCart}
    //     />
    //   );
    // });

    return (
      <>
        <div className="productsContainer flexColumn ">
          <div className="placeOrder">
            <p className="placeOrderHeading">Place Order</p>
            <p className="deliveryTime">Delivery in 10 minutes</p>
            <p className="checkoutItems">{totalCount} items</p>
          </div>
          <div className="checkoutProducts">{checkoutProducts}</div>
          <div className="checkoutPrice">
            <div className="flexRow">
              <p>MRP</p>
              <p>₹{mrpPrice}</p>
            </div>
            <div className="flexRow">
              <p>Product Discount</p>
              <p>₹{mrpPrice - actualPrice}</p>
            </div>
            <div className="flexRow">
              <p>Delivery Charge</p>
              <p>₹{dileveryCharge}</p>
            </div>
            <div className="flexRow">
              <p>Grand Total</p>
              <p>₹{actualPrice + 10}</p>
            </div>
            <div className="flexRow proceedButton">
              <div>
                <span>{totalCount} items =</span>
                <span>₹ {actualPrice + dileveryCharge}</span>
              </div>
              <p>Proceed ＞ </p>
            </div>
          </div>
          ;
        </div>
      </>
    );
  }
}
