import React from "react";
import styles from "../../categoriesNavbar.module.css";
import categoriesData from "../../../../data/categories.json";
import { getDropdown } from "../../helpers/getDropdown";

function DropDown(props) {
  const { changeCategory } = props;

  const dropDownList = getDropdown(changeCategory, categoriesData);

  return <ul className={styles.dropdown}>{dropDownList}</ul>;
}

export default DropDown;
