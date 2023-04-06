import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import lodash from "lodash";
import styles from "./productButton.module.css";
import { displayCounter } from "../../helpers/displayCounter";
import { EMPTY_OBJECT } from "../../constants/general.constants";

function ProductButton(props) {
  const { count, addItemInCart, removeItemInCart, product, showCounter } =
    props;

  return (
    <div className="product__quantity">
      <button
        className={classNames({
          [styles["product__quantity__button"]]: true,
          [styles["btn-add"]]: true,
          [styles["displayNone"]]: showCounter,
          [styles["displayBlock"]]: !showCounter,
        })}
        id={styles["btn-add"]}
        onClick={() => displayCounter(addItemInCart, product)}
      >
        ADD
      </button>
      <button
        className={classNames({
          [styles["product__quantity__button"]]: true,
          [styles["btn-number"]]: true,
          [styles["displayBlock"]]: showCounter,
          [styles["displayNone"]]: !showCounter,
        })}
        id={styles["btn-number"]}
      >
        <span
          className={styles.decrementQuantity}
          id="decrement"
          onClick={() => removeItemInCart(product)}
        >
          -
        </span>
        <span id="count_0">{count}</span>
        <span
          className={styles.incrementQuantity}
          id="increment"
          onClick={() => addItemInCart(product)}
        >
          +
        </span>
      </button>
    </div>
  );
}

ProductButton.propTypes = {
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  addItemInCart: PropTypes.func,
  removeItemInCart: PropTypes.func,
  showCounter: PropTypes.bool,
  product: PropTypes.object,
};

ProductButton.defaultTypes = {
  count: undefined,
  addItemInCart: lodash.noop,
  removeItemInCart: lodash.noop,
  showCounter: false,
  product: EMPTY_OBJECT,
};

export default ProductButton;
