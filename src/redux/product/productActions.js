import {
  CHANGE_CATEGORY,
  CHANGE_PRODUCT_CATEGORY,
  DECREMENT_COUNT,
  DISPLAY_COUNTER,
  INCREMENT_COUNT,
} from "./productTypes";

export const incrementCount = (productObj) => {
  console.log("incrementCount", productObj);
  return {
    type: INCREMENT_COUNT,
    payload: {
      value: productObj.value,
      product: productObj.product,
      id: productObj.id,
      categorie: productObj.categorie,
      productCategorieId: productObj.productCategorieId,
    },
  };
};

export const decrementCount = (productObj) => {
  console.log("decrementCount", productObj);
  return {
    type: DECREMENT_COUNT,
    payload: {
      value: productObj.value,
      product: productObj.product,
      id: productObj.id,
      categorie: productObj.categorie,
      productCategorieId: productObj.productCategorieId,
    },
  };
};

export const displayCounter = (id) => {
  return {
    type: DISPLAY_COUNTER,
  };
};

export const changeCategorie = (categorie) => {
  return {
    type: CHANGE_CATEGORY,
    categorie: categorie,
  };
};

export const changeProductCategorie = (id, productCategorie) => {
  return {
    type: CHANGE_PRODUCT_CATEGORY,
    id: id,
    productCategorie: productCategorie,
  };
};
