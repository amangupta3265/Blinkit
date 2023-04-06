import React from "react";
import lodash from "lodash";
import PropTypes from "prop-types";
import styles from "./productCategoriesNavbar.module.css";
import { getProductCategoryComponent } from "../../helpers/getProductCategoryComponents";

function ProductCategoriesNavbar(props) {
  const { productcategories, changeProductcategory } = props;

  const listItems = getProductCategoryComponent(
    productcategories,
    changeProductcategory
  );

  return <ul className={styles.productcategoriesNavbar}> {listItems}</ul>;
}

ProductCategoriesNavbar.propTypes = {
  changeProductcategory: PropTypes.func,
  productcategories: PropTypes.array,
};

ProductCategoriesNavbar.defaultTypes = {
  changeProductcategory: lodash.noop,
  productcategories: [],
};

function arePropsEqual(prevProps, nextProps) {
  return prevProps.productcategories === nextProps.productcategories;
}

export default React.memo(ProductCategoriesNavbar, arePropsEqual);
