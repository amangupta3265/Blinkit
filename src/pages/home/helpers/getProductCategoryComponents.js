import ProductCategory from "../atoms/productCategory";
import lodash from "lodash";

function createProductCategoryComponent(
  productcategory,
  id,
  productcategories,
  changeProductcategory
) {
  return (
    <ProductCategory
      key={productcategory.id}
      id={id}
      productCategory={productcategory}
      changeProductCategory={changeProductcategory}
    />
  );
}

function getProductCategoryComponent(productcategories, changeProductcategory) {
  const listItems = lodash.map(
    productcategories,
    lodash.partialRight(createProductCategoryComponent, changeProductcategory)
  );

  return listItems;
}

export { getProductCategoryComponent };
