import data from "../../../data/productData.json";
import subCategories from "../../../data/subCategories.json";
import lodash from "lodash";

function getProducts(category, productcategoryId) {
  const allProductsData = lodash.get(data, "productData");
  const productCategories = lodash.get(
    subCategories,
    `productCategories.${category}`
  );

  const productCategorie = lodash.get(
    productCategories,
    `${productcategoryId}.productCategory__name`
  );

  const products = lodash.get(
    allProductsData,
    `${category}.${productCategorie}.products`
  );

  return products;
}

export { getProducts };
