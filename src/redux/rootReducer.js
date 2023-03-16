import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productReducer from "./product/productReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

export default rootReducer;
