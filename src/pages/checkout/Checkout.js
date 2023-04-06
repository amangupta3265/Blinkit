import React from "react";
import AboutBlinkit from "../../atoms/aboutBlinkit";
import Advantages from "../../molecules/advantages/";
import CategoriesNavbar from "../../molecules/categoriesNavbar";
import Footer from "../../molecules/footer";
import TopNavbar from "../../organisms/topNavbar";
import CartBilling from "./molecules/cartBilling";
import PlaceOrderHeader from "./molecules/placeOrderHeader";
import PropTypes from "prop-types";
import styles from "./checkout.module.css";
import classNames from "classnames";
import { connect } from "react-redux";
import lodash from "lodash";
import { getCartInfo } from "./helpers/getCartInfo";
import { getCheckoutProducts } from "./helpers/getCheckoutProducts";
import { EMPTY_OBJECT } from "../../constants/general.constants";

function Checkout(props) {
  const { cartData, changeCategory } = props;

  const cartInfo = getCartInfo(cartData);
  const checkoutProducts = getCheckoutProducts(cartData);

  const { mrpPrice, actualPrice, totalCount } = cartInfo;

  return (
    <>
      <TopNavbar cartData={cartData} />

      <CategoriesNavbar changeCategory={changeCategory} />
      <div className={classNames(styles.productsContainer, styles.flexColumn)}>
        <PlaceOrderHeader totalCount={totalCount} />
        <div className={styles.checkoutProducts}>{checkoutProducts}</div>
        <CartBilling
          actualPrice={actualPrice}
          mrpPrice={mrpPrice}
          totalCount={totalCount}
        />
      </div>
      <Advantages />
      <AboutBlinkit />
      <Footer />
    </>
  );
}

Checkout.propTypes = {
  changeCategory: lodash.noop,
  cartData: PropTypes.object,
};

Checkout.defaultProps = {
  cartData: EMPTY_OBJECT,
};

const mapStateToProps = (state) => {
  return {
    cartData: state.cartData,
  };
};

export default connect(mapStateToProps)(Checkout);
