import React from "react";
import PropTypes from "prop-types";
import styles from "./placeOrderHeader.module.css";

function PlaceOrderHeader(props) {
  return (
    <>
      <div className={styles.placeOrder}>
        <p className={styles.placeOrderHeading}>Place Order</p>
        <p className={styles.deliveryTime}>Delivery in 10 minutes</p>
        <p className={styles.checkoutItems}>{props.totalCount} items</p>
      </div>
    </>
  );
}

PlaceOrderHeader.propTypes = {
  totalCount: PropTypes.number,
};

PlaceOrderHeader.defaultProps = {
  totalCount: undefined,
};

export default PlaceOrderHeader;
