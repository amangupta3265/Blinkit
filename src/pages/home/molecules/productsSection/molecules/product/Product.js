import React from "react";
import ProductButton from "../../../../../../atoms/productButton";
import PropTypes from "prop-types";
import lodash from "lodash";
import styles from "./product.module.css";
import {
  addItemInCart,
  removeItemInCart,
} from "../../../../../../actions/cartActions";
import { connect } from "react-redux";
import productReader from "../../../../../readers/productReader";
import { getProductInfo } from "../../../../../../helpers/getProductInfo";
import { EMPTY_OBJECT } from "../../../../../../constants/general.constants";

function Product(props) {
  const { product, cartData, addItemInCart, removeItemInCart } = props;

  const productId = lodash.get(product, "product__id");

  const { productCount, showCounter } = getProductInfo(cartData, productId);

  const Product = (
    <div className={styles.products__product}>
      <div className={styles.product__image}>
        <div className={styles.product__offer}>
          {productReader.getProductOffer(product)}
        </div>
        <img src={productReader.getProductImage(product)} alt="" />
        <div className={styles.product__sourced}>
          {productReader.getProductSourced(product)}
        </div>
      </div>
      <div className={styles.product__name}>
        {productReader.getProductName(product)}
      </div>
      <div className={styles.product__weight}>
        {productReader.getProductWeight(product)}
      </div>
      <div className={styles.product__details}>
        <div className={styles.product__price}>
          <span className={styles.product__newPrice}>
            ₹{productReader.getProductNewPrice(product)}
          </span>
          <span className={styles.product__oldPrice}>
            ₹{productReader.getProductOldPrice(product)}
          </span>
        </div>
        <ProductButton
          showCounter={showCounter}
          addItemInCart={addItemInCart}
          removeItemInCart={removeItemInCart}
          count={productCount}
          product={product}
        />
      </div>
    </div>
  );
  return Product;
}

Product.propTypes = {
  product: PropTypes.object,
  addItemInCart: PropTypes.func,
  removeItemInCart: PropTypes.func,
  productData: PropTypes.object,
};

Product.defaultProps = {
  product: EMPTY_OBJECT,
  addItemInCart: lodash.noop,
  removeItemInCart: lodash.noop,
  productData: EMPTY_OBJECT,
};

const mapStateToProps = (state) => {
  return {
    cartData: state.cartData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemInCart: (product) => dispatch(addItemInCart(product)),
    removeItemInCart: (product) => dispatch(removeItemInCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
