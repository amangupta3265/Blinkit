//import productController from "./productController";
import cartModel from "../model/cartModel.js";
import cartView from "../view/cartView.js";

let cartController = {
  init: function (cartData) {
    //console.log("sending cart model", cartData);
    cartModel.setData(cartData);
    // cartView.render(cartData);
  },

  getCartData: function () {
    return cartModel.cartData;
  },
};

export default cartController;
