import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import lodash from "lodash";
import styles from "./productCategory.module.css";
import { EMPTY_OBJECT } from "../../../../constants/general.constants";

function changeProductCategoryStyle(event) {
  const categoryList = document.querySelectorAll(
    `.${styles.productcategoriesNavbar__category}`
  );
  categoryList.forEach((category) => {
    category.classList.remove(`${styles.productCategory__active}`);
  });

  event.currentTarget.classList.add(`${styles.productCategory__active}`);
}

function ProductCategory(props) {
  const productCategory = (
    <li
      className={classNames(
        styles.productCategory,
        styles.flexRow,
        styles["productcategoriesNavbar__category"],
        {
          [styles["productCategory__active"]]: props.id === 0,
        }
      )}
      onClick={(e) => {
        props.changeProductCategory(e, props.id);
        changeProductCategoryStyle(e);
      }}
    >
      <img
        className={styles.productCategory__image}
        src={props.productCategory["productCategory__image"]}
        alt={props.productCategory["productCategory__name"]}
      />

      <span className={styles.productCategory__name}>
        {props.productCategory["productCategory__name"]}
      </span>
    </li>
  );

  return productCategory;
}

ProductCategory.defaultProps = {
  id: undefined,
  productCategory: EMPTY_OBJECT,
  changeProductcategory: lodash.noop,
};

ProductCategory.propTypes = {
  id: PropTypes.number,
  productCategory: PropTypes.object,
  changeProductcategory: PropTypes.func,
};

export default ProductCategory;
