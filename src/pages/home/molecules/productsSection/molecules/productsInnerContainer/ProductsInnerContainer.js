import React from "react";
import PropTypes from "prop-types";
import styles from "./productsInnerContainer.module.css";
import { getProductComponents } from "../../../../helpers/getProductComponents";

function ProductsInnerContainer(props) {
  const { products } = props;

  const productsArray = getProductComponents(products);

  return (
    <div className={`${styles.products} ${styles.flexRow}`}>
      {productsArray}
    </div>
  );
}

ProductsInnerContainer.propTypes = {
  products: PropTypes.array,
};
ProductsInnerContainer.defaultProps = {
  products: [],
};

export default ProductsInnerContainer;
