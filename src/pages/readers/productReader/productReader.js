import _property from "lodash/property";

const getProductOffer = _property("product__offer");
const getProductImage = _property("product__image");
const getProductSourced = _property("product__sourced");
const getProductName = _property("product__name");
const getProductWeight = _property("product__weight");
const getProductNewPrice = _property("product__newPrice");
const getProductOldPrice = _property("product__oldPrice");

const productReader = {
  getProductOffer,
  getProductImage,
  getProductSourced,
  getProductName,
  getProductWeight,
  getProductNewPrice,
  getProductOldPrice,
};

export default productReader;
