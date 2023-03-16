import React from "react";

function CartBilling(props) {
  return (
    <>
      <div className="checkoutPrice">
        <div className="flexRow">
          <p>MRP</p>
          <p>₹{props.mrpPrice}</p>
        </div>
        <div className="flexRow">
          <p>Product Discount</p>
          <p>₹{props.mrpPrice - props.actualPrice}</p>
        </div>
        <div className="flexRow">
          <p>Delivery Charge</p>
          <p>₹{parseInt(10)}</p>
        </div>
        <div className="flexRow">
          <p>Grand Total</p>
          <p>₹{props.actualPrice + 10}</p>
        </div>
        <div className="flexRow proceedButton">
          <div>
            <span>{props.totalCount} items =</span>
            <span>₹ {parseInt(props.actualPrice) + parseInt(10)}</span>
          </div>
          <p>Proceed ＞ </p>
        </div>
      </div>
    </>
  );
}

export default CartBilling;
