import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import lodash from "lodash";
import styles from "../../categoriesNavbar.module.css";
import DropDown from "../../molecules/dropDown";

function Category(props) {
  const { changeCategory, categoryId, categoryName } = props;

  const navigate = useNavigate();

  const gotoHomePage = () => {
    navigate("/");
  };

  return (
    <li
      className={classNames(styles["categories__category"], {
        [styles["categories__more"]]: categoryId === 7,
      })}
      onClick={() => {
        gotoHomePage();
        changeCategory(categoryId);
      }}
    >
      {categoryId < 7 && categoryName}
      {categoryId === 7 && (
        <>
          <span>More</span>
          <DropDown changeCategory={changeCategory} />
        </>
      )}
    </li>
  );
}

Category.propTypes = {
  categoryName: PropTypes.string,
  categoryId: PropTypes.number,
  changecategory: PropTypes.func,
};

Category.defaultProps = {
  categoryName: undefined,
  categoryId: undefined,
  changecategory: lodash.noop,
};

export default Category;
