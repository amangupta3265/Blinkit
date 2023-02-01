import React from "react";
import DeliveryHead from "./atoms/deliveryHead";
import LoginBtn from "./atoms/loginBtn";
import Logo from "./atoms/logo";
import MyCart from "./atoms/myCart";
import PropTypes from "prop-types";
import styles from "./topNavbar.module.css";
import { EMPTY_OBJECT } from "../../constants/general.constants";
import { connect } from "react-redux";

function TopNavbar(props) {
  const { cartData } = props;

  return (
    <div className={`${styles.topNavbar} ${styles.flexRow}`}>
      <div className={`${styles.topNavbar__left} ${styles.flexRow}`}>
        <Logo />
        <DeliveryHead />
      </div>

      <div
        className={`
          ${styles.topNavbar__right}
          ${styles.flexRow}
          ${styles.paddingTopBottom10px}
        `}
      >
        <LoginBtn />
        <MyCart cartData={cartData} />
      </div>
    </div>
  );
}

TopNavbar.propTypes = {
  cartData: PropTypes.object,
};

TopNavbar.defaultProps = {
  cartData: EMPTY_OBJECT,
};

const mapStateToProps = (state) => {
  return {
    cartData: state.cartData,
  };
};

export default connect(mapStateToProps)(TopNavbar);
