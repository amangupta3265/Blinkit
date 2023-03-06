import React from "react";
import DeliveryHead from "./deliveryHead";
import LoginBtn from "./loginBtn";
import Logo from "./logo";
import MyCart from "./myCart";

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
          <MyCart />
        </div>
      </div>
    </>
  );
}

export default TopNavbar;
