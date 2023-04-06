import React from "react";
import PropTypes from "prop-types";
import styles from "./cartBilling.module.css";

function CartBilling(props) {
  const { mrpPrice, actualPrice, totalCount } = props;

  return (
    <>
      <div className={styles.checkoutPrice}>
        <div className={styles.flexRow}>
          <p>MRP</p>
          <p>₹{mrpPrice}</p>
        </div>
        <div className={styles.flexRow}>
          <p>Product Discount</p>
          <p className={styles.productDiscount}>- ₹{mrpPrice - actualPrice}</p>
        </div>
        <div className={styles.flexRow}>
          <p>Delivery Charge</p>
          <p className={styles.deliveryCharge}>₹{parseInt(10)}</p>
        </div>
        <div className={styles.flexRow}>
          <p>Grand Total</p>
          <p>₹{actualPrice + 10}</p>
        </div>
        <div
          className={`
            ${styles.flexRow}
            ${styles.proceedButton}
            ${styles.boldText}
          `}
        >
          <div>
            <span>{totalCount} items = </span>
            <span>₹{parseInt(actualPrice) + parseInt(10)} </span>
            <span className={styles.mrpPrice}>
              ₹{parseInt(mrpPrice) + parseInt(10)}
            </span>
          </div>
          <p>Proceed ＞ </p>
        </div>
      </div>
    </>
  );
}

CartBilling.propTypes = {
  actualPrice: PropTypes.number,
  mrpPrice: PropTypes.number,
  dileveryCharge: PropTypes.number,
  totalCount: PropTypes.number,
};

CartBilling.defaultProps = {
  actualPrice: undefined,
  mrpPrice: undefined,
  dileveryCharge: undefined,
  totalCount: undefined,
};

export default CartBilling;
