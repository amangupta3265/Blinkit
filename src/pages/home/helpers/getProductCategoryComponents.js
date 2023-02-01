import ProductCategory from "../atoms/productCategory";
import lodash from "lodash";

function getProductCategoryComponent(productcategories, changeProductcategory) {
  const listItems = lodash.map(productcategories, (productcategory, id) => {
    return (
      <ProductCategory
        key={productcategory.id}
        id={id}
        productCategory={productcategory}
        changeProductCategory={changeProductcategory}
      />
    );
  });

  return listItems;
}

export { getProductCategoryComponent };
