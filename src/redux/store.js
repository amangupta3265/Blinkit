import { createStore } from "redux";
import cartReducer from "../reducers/cartReducer";
import { enableMapSet } from "immer";

enableMapSet();

const store = createStore(cartReducer);

export default store;
