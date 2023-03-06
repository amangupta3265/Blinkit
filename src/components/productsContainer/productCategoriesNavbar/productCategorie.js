import React from "react";

// let productCategorieElement = (singleproductCategorie) => {
//   let productCategorie = document.createElement("li");
//   let productCategory__image = document.createElement("img");
//   let productCategory__name = document.createElement("span");

//   productCategorie.className = "productCategory flexRow";
//   productCategory__image.className = "productCategory__image";
//   productCategory__name.className = "productCategory__name";

//   productCategory__image.src = singleproductCategorie["productCategory__image"];
//   productCategory__name.innerText =
//     singleproductCategorie["productCategory__name"];

//   productCategorie.appendChild(productCategory__image);
//   productCategorie.appendChild(productCategory__name);

//   return productCategorie;
// };

function ProductCategorie(props) {
  //let productCategorie = productCategorieElement(props.productCategorie);

  //console.log(props.productCategorie);
  console.log(props.id);
  console.log(props.productCategorie["productCategory__image"]);
  console.log(props.productCategorie["productCategory__name"]);

  const productCategorie = (
    <li className="productCategory flexRow">
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

  // if (props.id === 0) {
  //   productCategorie.className += "productCategory__active";
  // }

  return productCategorie;
}

export default ProductCategorie;
