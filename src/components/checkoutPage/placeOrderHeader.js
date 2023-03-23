import React from "react";

function PlaceOrderHeader(props) {
  return (
    <>
      <div className="placeOrder">
        <p className="placeOrderHeading">Place Order</p>
        <p className="deliveryTime">Delivery in 10 minutes</p>
        <p className="checkoutItems">{props.totalCount} items</p>
      </div>
    </>
  );
}

export default PlaceOrderHeader;
