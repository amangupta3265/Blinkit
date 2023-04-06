import subCategories from "../../../data/subCategories.json";
import lodash from "lodash";

function getProductCategories(category) {
  const productcategories = lodash.get(subCategories, [
    "productCategories",
    category,
  ]);
  return productcategories;
}

export { getProductCategories };
