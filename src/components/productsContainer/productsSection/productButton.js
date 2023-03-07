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
