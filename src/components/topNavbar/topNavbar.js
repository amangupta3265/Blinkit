import React from "react";
import DeliveryHead from "./deliveryHead";
import LoginBtn from "./loginBtn";
import Logo from "./logo";
import MyCart from "./myCart";
import { Link } from "react-router-dom";

function TopNavbar(props) {
  console.log(props.data, "from top navbar");
  return (
    <>
      <div className="topNavbar flexRow">
        <div className="topNavbar__left flexRow">
          <Logo />
          <DeliveryHead />
        </div>

        <div className="topNavbar__right flexRow paddingTopBottom10px">
          <LoginBtn />
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <MyCart
              displayCartItems={props.displayCartItems}
              cartItemsCount={props.cartItemsCount}
              cartItemsValue={props.cartItemsValue}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default TopNavbar;
