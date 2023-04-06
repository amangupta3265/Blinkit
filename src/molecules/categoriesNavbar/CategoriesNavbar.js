import React from "react";
import PropTypes from "prop-types";
import lodash from "lodash";
import styles from "./categoriesNavbar.module.css";
import { getCategoriesList } from "../../helpers/getCategoriesList";

function CategoriesNavbar(props) {
  const { changeCategory } = props;

  const categoryList = getCategoriesList(changeCategory);

  return (
    <ul className={`${styles.categories}  ${styles.flexRow}`}>
      {categoryList}
    </ul>
  );
}

CategoriesNavbar.propTypes = {
  changeCategorie: PropTypes.func,
};

CategoriesNavbar.defaultProps = {
  changeCategorie: lodash.noop,
};

export default CategoriesNavbar;
