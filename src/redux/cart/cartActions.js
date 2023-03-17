import { ADD_ITEM_IN_CART, REMOVE_ITEM_IN_CART } from "./cartTypes";

export const addItemInCart = (productObj) => {
  //   console.log(
  //     "addItemInCart",
  //     "value",
  //     productObj.value,
  //     "id",
  //     productObj.id,
  //     "product",
  //     productObj.product,
  //     "categorie",
  //     productObj.categorie,
  //     "productCategorieId",
  //     productObj.productCategorieId
  //   );

  return {
    type: ADD_ITEM_IN_CART,
    payload: {
      value: productObj.value,
      product: productObj.product,
      id: productObj.id,
      categorie: productObj.categorie,
      productCategorieId: productObj.productCategorieId,
    },
  };
};

export const removeItemInCart = (productObj) => {
  //   console.log(
  //     "addItemInCart",
  //     "value",
  //     productObj.value,
  //     "id",
  //     productObj.id,
  //     "product",
  //     productObj.product,
  //     "categorie",
  //     productObj.categorie,
  //     "productCategorieId",
  //     productObj.productCategorieId
  //   );
  return {
    type: REMOVE_ITEM_IN_CART,
    payload: {
      value: productObj.value,
      product: productObj.product,
      id: productObj.id,
      categorie: productObj.categorie,
      productCategorieId: productObj.productCategorieId,
    },
  };
};

// export const removeItemInCart = ({
//   value,
//   product,
//   id,
//   categorie,
//   productCategorieId,
// }) => {
//   return {
//     type: REMOVE_ITEM_IN_CART,
//     value: value,
//     product: product,
//   };
// };
