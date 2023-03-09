import React, { Component } from "react";

export default class ProductButton extends Component {
  render() {
    return (
      <div className="product__quantity">
        <button
          className="btn-add"
          onClick={this.props.displayCounter}
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
            onClick={this.props.decrementCount}
          >
            -
          </span>
          <span id="count_0">{this.props.count}</span>
          <span
            className="incrementQuantity"
            id="increment"
            onClick={this.props.incrementCount}
          >
            +
          </span>
        </button>
      </div>
    );
  }
}

/*
<div class='checkout__quantity'>
            <button style='border-radius: 0.5rem;background-color: #23963f;color:white;padding:1rem 1rem;width:9;margin-right:8rem;border:none'>
            <span style="padding-right:1rem" class="decrementQuantity" id="decrement_${k}">-</span>
            <span id="count_${k}">${count}</span>
            <span style="padding-left:1rem"class="incrementQuantity" id="increment_${k}">+</span>
            </button>
            <div>
            */
