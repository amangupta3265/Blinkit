import React from "react";
import ProductButton from "../../../../atoms/productButton";
import PropTypes from "prop-types";
import lodash from "lodash";
import styles from "./checkoutProduct.module.css";
import { connect } from "react-redux";
import {
  addItemInCart,
  removeItemInCart,
} from "../../../../actions/cartActions";
import productReader from "../../../readers/productReader";
import { getProductInfo } from "../../../../helpers/getProductInfo";

function CheckoutProduct(props) {
  const { product, cartData, addItemInCart, removeItemInCart } = props;
  const productId = product["product__id"];

  const { productCount, showCounter } = getProductInfo(cartData, productId);

  const Product = (
    <div className={`${styles.checkout__product} ${styles.flexRow}`}>
      <div className={styles.flexRow}>
        <div className={styles.product__image}>
          <div className={styles.product__offer}>
            {productReader.getProductOffer(product)}
          </div>
          <img src={productReader.getProductImage(product)} alt="" />
        </div>
        <div>
          <div
            className={`${styles.product__name}
              ${styles.checkoutProduct__name}`}
          >
            {productReader.getProductName(product)}
          </div>
          <div className={styles.product__weight}>
            {productReader.getProductWeight(product)}
          </div>
          <div className={styles.product__details}>
            <div
              className={`
                ${styles.product__price}
                ${styles.checkoutProduct__price}`}
            >
              <span
                className={`
                  ${styles.product__newPrice}
                  ${styles.boldText}`}
              >
                <span>&#8377;</span>
                <span>{productReader.getProductNewPrice(product)}</span>
              </span>
              <span className={styles.product__oldPrice}>
                <span>&#8377;</span>
                <span>{productReader.getProductOldPrice(product)}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <ProductButton
        showCounter={showCounter}
        addItemInCart={addItemInCart}
        removeItemInCart={removeItemInCart}
        count={productCount}
        product={product}
      />
    </div>
  );
  return Product;
}

CheckoutProduct.propTypes = {
  product: PropTypes.object,
  addItemInCart: PropTypes.func,
  removeItemInCart: PropTypes.func,
  cartData: PropTypes.object,
};

CheckoutProduct.defaultProps = {
  product: {},
  addItemInCart: lodash.noop,
  removeItemInCart: lodash.noop,
  cartData: {},
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemInCart: (product) => dispatch(addItemInCart(product)),
    removeItemInCart: (product) => dispatch(removeItemInCart(product)),
  };
};

export default connect(undefined, mapDispatchToProps)(CheckoutProduct);
