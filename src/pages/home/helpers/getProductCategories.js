import subCategories from "../../../data/subCategories.json";

function getProductCategories(category) {
  const productcategories = subCategories["productCategories"][category];
  return productcategories;
}

export { getProductCategories };
