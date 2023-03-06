import React from "react";

function Product(props) {
  // console.log(props);
  let product = (
    <div className="products__product">
      <div className="product__image">
        <div className="product__offer">{props.product.product__offer}</div>
        <img src="./potato.jpeg" alt="" />
        <div className="product__sourced">{props.product.product__sourced}</div>
      </div>
      <div className="product__name">{props.product.product__name}</div>
      <div className="product__weight">{props.product.product__weight}</div>
      <div className="product__details">
        <div className="product__price">
          <span className="product__newPrice">
            {props.product.product__newPrice}
          </span>
          <span className="product__oldPrice">
            {props.product.product__oldPrice}
          </span>
        </div>
        <div className="product__quantity">
          <button className="btn-add">ADD</button>
          <button className="btn-number">
            <span className="decrementQuantity" id="decrement">
              -
            </span>
            <span id="count_0">1</span>
            <span className="incrementQuantity" id="increment">
              +
            </span>
          </button>
        </div>
      </div>
    </div>
  );
  return product;
}

export default Product;
