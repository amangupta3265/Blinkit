import React from "react";

function DeliveryHead() {
  return (
    <div className="deliveryHead paddingTopBottom10px">
      <p>Delivery in 10 minutes</p>
      <select>
        <option value="">Banglore,India</option>
        <option value="">Delhi,India</option>
        <option value="">Mumbai,India</option>
        <option value="">Kolkata,India</option>
      </select>
    </div>
  );
}

export default DeliveryHead;
