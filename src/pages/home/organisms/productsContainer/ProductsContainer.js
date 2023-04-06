import React from "react";
import ProductCategoriesNavbar from "../../molecules/productCategoriesNavbar";
import ProductSection from "../../molecules/productsSection";
import categoriesData from "../../../../data/categories.json";
import { getProducts } from "../../helpers/getProducts";
import { getProductCategories } from "../../helpers/getProductCategories";
import PropTypes from "prop-types";
import styles from "./productsContainer.module.css";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productcategoryId: 0,
      categoryId: 0,
    };
  }

  changeProductcategory = (event, productcategoryId) => {
    this.setState({
      productcategoryId: productcategoryId,
    });
  };

  componentDidUpdate() {
    const categoryId = this.props.categoryId;
    if (categoryId !== this.state.categoryId) {
      this.setState({
        categoryId: this.props.categoryId,
        productcategoryId: 0,
      });
    }
  }

  render() {
    const { categoryId } = this.props;

    const category =
      categoriesData["categories"][this.props.categoryId]["name"];

    let productcategoryId = parseInt(this.state.productcategoryId);

    if (categoryId !== this.state.categoryId) {
      productcategoryId = 0;
    }

    const productcategories = getProductCategories(category);

    const products = getProducts(category, productcategoryId);

    return (
      <div className={styles.productsContainer}>
        <ProductCategoriesNavbar
          changeProductcategory={this.changeProductcategory}
          productcategories={productcategories}
        />
        <ProductSection products={products} />
      </div>
    );
  }
}

ProductsContainer.defaultProps = {
  categoryId: 0,
};

ProductsContainer.propTypes = {
  categoryId: PropTypes.number,
};

export default ProductsContainer;
