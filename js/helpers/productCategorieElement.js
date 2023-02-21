let productCategorieElement = (singleproductCategorie) => {
  let productCategorie = document.createElement("li");
  let productCategory__image = document.createElement("img");
  let productCategory__name = document.createElement("span");

  productCategorie.className = "productCategory flexRow";
  productCategory__image.className = "productCategory__image";
  productCategory__name.className = "productCategory__name";

  productCategory__image.src = singleproductCategorie["productCategory__image"];
  productCategory__name.innerText =
    singleproductCategorie["productCategory__name"];

  productCategorie.appendChild(productCategory__image);
  productCategorie.appendChild(productCategory__name);

  return productCategorie;
};

export default productCategorieElement;
