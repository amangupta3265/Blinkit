import produce from "immer";
import {
  ADD_ITEM_IN_CART,
  REMOVE_ITEM_IN_CART,
} from "../../constants/cartActionTypes.constants";
import lodash from "lodash";
import { addItemInCartProducer } from "../../helpers/addItemInCartProducer";
import { removeItemInCartProducer } from "../../helpers/removeItemInCartProducer";

const cartState = {
  cartData: new Map(),
};

const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_ITEM_IN_CART: {
      const product = lodash.get(action, "payload.product");

      return addItemInCartProducer(state, product);
    }

    case REMOVE_ITEM_IN_CART: {
      const product = action.payload.product;

      return removeItemInCartProducer(state, product);
    }

    default:
      return state;
  }
};

export default cartReducer;
