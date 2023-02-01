import {
  ADD_ITEM_IN_CART,
  REMOVE_ITEM_IN_CART,
} from "../constants/cartActionTypes.constants";

export const addItemInCart = (product) => {
  return {
    type: ADD_ITEM_IN_CART,
    payload: {
      product: product,
    },
  };
};

export const removeItemInCart = (product) => {
  return {
    type: REMOVE_ITEM_IN_CART,
    payload: {
      product: product,
    },
  };
};
