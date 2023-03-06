import React from "react";

function MyCart() {
  return (
    <button className="myCart flexRow">
      <span>
        <i className="fa-solid fa-cart-shopping"></i>
      </span>
      <span className="myCart__items">My Cart</span>
    </button>
  );
}

export default MyCart;
