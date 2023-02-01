import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./myCart.module.css";
import { getCartItemsData } from "../../../../pages/home/helpers/getCartItemsData";

function MyCart(props) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const { cartData } = props;
  const cartItemsData = getCartItemsData(cartData);
  const { cartItemsCount, cartItemsValue, displayCartItems } = cartItemsData;

  return (
    <button
      className={`${styles.myCart} ${styles.flexRow}`}
      onClick={handleCheckout}
    >
      <span className={styles.shoppingIcon}>
        <i className="fa-solid fa-cart-shopping"></i>
      </span>
      <span>
        <div style={{ display: displayCartItems ? "none" : "block" }}>
          My Cart
        </div>
        <div style={{ display: displayCartItems ? "block" : "none" }}>
          <div>{cartItemsCount} items</div>
          <div>
            <span>&#8377;</span>
            {cartItemsValue}
          </div>
        </div>
      </span>
    </button>
  );
}

MyCart.propTypes = {
  cartData: PropTypes.object,
};

MyCart.defaultProps = {
  cartData: {},
};

export default MyCart;
