import React from "react";

function ProductCategorie(props) {
  const productCategorie = (
    <li
      className={
        props.id === 0
          ? "productCategory flexRow productCategory__active"
          : "productCategory flexRow"
      }
      onClick={(e) => props.changeProductCategorie(e, props.id)}
    >
      <img
        className="productCategory__image"
        src={props.productCategorie["productCategory__image"]}
        alt={props.productCategorie["productCategory__name"]}
      />

      <span className="productCategory__name">
        {props.productCategorie["productCategory__name"]}
      </span>
    </li>
  );

  return productCategorie;
}

export default ProductCategorie;
