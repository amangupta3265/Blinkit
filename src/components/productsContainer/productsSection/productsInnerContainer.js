import React from "react";
import Product from "./product";

function ProductsInnerContainer(props) {
  let { products } = props;

  //console.log(props.categorie);

  let productsArray = products.map((product, id) => {
    return (
      <Product
        incrementCount={props.incrementCount}
        data={props.data}
        product={product}
        key={id + props.productCategorie}
        productCategorie={props.productCategorie}
        categorie={props.categorie}
        //index={props.id}
        id={id}
        addItemInCart={props.addItemInCart}
        removeItemInCart={props.removeItemInCart}
      />
    );
  });

  return <div className="products flexRow">{productsArray} </div>;
}

export default ProductsInnerContainer;
