import Category from "../molecules/categoriesNavbar/atoms/category";
import categoriesData from "../data/categories.json";
import lodash from "lodash";

function generateCategory(value, categoryList, changeCategorie) {
  const category = value["name"];

  categoryList.push(
    <Category
      key={category}
      categoryName={category}
      categoryId={value["id"]}
      changeCategory={changeCategorie}
    />
  );
}

function getCategoriesList(changeCategorie) {
  const categories = categoriesData["categories"];

  const categoryList = [];

  lodash.forEach(categories, (value) => {
    if (value.id < 8) {
      return generateCategory(value, categoryList, changeCategorie);
    }
  });

  return categoryList;
}

export { getCategoriesList };
