import React from "react";
import Product from "./product";

function ProductsInnerContainer(props) {
  let { products } = props;

  //console.log(props.categorie);

  let productsArray = products.map((product, id) => {
    return (
      <Product
        incrementCount={props.incrementCount}
        decrementCount={props.decrementCount}
        showCounter={props.showCounter}
        displayCounter={props.displayCounter}
        data={props.data}
        product={product}
        key={id + props.productCategorie}
        productCategorie={props.productCategorie}
        categorie={props.categorie}
        //index={props.id}
        count={product["count"]}
        id={id}
        addItemInCart={props.addItemInCart}
        removeItemInCart={props.removeItemInCart}
        productCategorieId={props.productCategorieId}
      />
    );
  });

  return <div className="products flexRow">{productsArray} </div>;
}

export default ProductsInnerContainer;
