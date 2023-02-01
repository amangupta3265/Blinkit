import React from "react";
import PropTypes from "prop-types";
import lodash from "lodash";
import styles from "./productsSectionHeading.module.css";

function ProductsSectionHeading(props) {
  return (
    <div className={`${styles.productsSection__heading} ${styles.flexRow}`}>
      <p className={styles.buyHeading}>Buy Fresh Vegetables Online</p>

      <form className={styles.productsSection__filter} action="">
        <label htmlFor="sortBy" className={styles.sortByLabel}>
          Sort By
        </label>
        <select
          className={styles.sortBy}
          id="sortBy"
          onChange={props.sortProducts}
        >
          <option value="relevence">Relevence</option>
          <option value="priceLowToHigh">Price (low to high)</option>
          <option value="priceHighToLow">Price (high to low)</option>
        </select>
      </form>
    </div>
  );
}

ProductsSectionHeading.propTypes = {
  sortProducts: PropTypes.func,
};

ProductsSectionHeading.defaultProps = {
  sortProducts: lodash.noop,
};

export default ProductsSectionHeading;
