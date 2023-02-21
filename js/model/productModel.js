let productModel = {
  productData: [],

  setData: function (data) {
    console.log("data in model", data);
    this.productData = data;
  },
};

export default productModel;
