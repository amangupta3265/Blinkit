import React from "react";
import { useNavigate } from "react-router-dom";

function MyCart(props) {
  const navigate = useNavigate();

  let handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <button className="myCart flexRow" onClick={handleCheckout}>
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
