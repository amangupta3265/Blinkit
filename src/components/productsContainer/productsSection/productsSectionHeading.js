import React from "react";

function ProductsSectionHeading(props) {
  return (
    <div className="productsSection__heading">
      <p className="buyHeading">Buy Fresh Vegetables Online</p>

      <form className="productsSection__filter" action="">
        <label htmlFor="sortBy" className="sortByLabel">
          Sort By
        </label>
        <select className="sortBy" id="sortBy" onChange={props.sortProducts}>
          <option value="relevence">Relevence</option>
          <option value="priceLowToHigh">Price (low to high)</option>
          <option value="priceHighToLow">Price (high to low)</option>
        </select>
      </form>
    </div>
  );
}

export default ProductsSectionHeading;
