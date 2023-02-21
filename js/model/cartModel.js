let cartModel = {
  cartData: new Map(),

  setData: function (data) {
    this.cartData = data;
    //console.log("from cart model", this.cartData);
  },
};

export default cartModel;
