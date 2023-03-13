import React from "react";

function MyCart(props) {
  return (
    <button className="myCart flexRow">
      <span>
        <i className="fa-solid fa-cart-shopping"></i>
      </span>
      <span className="myCart__items">
        <div style={{ display: props.displayCartItems ? "none" : "block" }}>
          My Cart
        </div>
        <div style={{ display: props.displayCartItems ? "block" : "none" }}>
          <div>{props.cartItemsCount} items</div>
          <div>
            <span>&#8377;</span>
            {props.cartItemsValue}
          </div>
        </div>
      </span>
    </button>
  );
}

export default MyCart;
