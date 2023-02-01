import React from "react";
import ProductsInnerContainer from "./molecules/productsInnerContainer";
import ProductsSectionHeading from "./molecules/productsSectionHeading";
import PropTypes from "prop-types";
import { sortProducts } from "../../helpers/sortProducts";
import styles from "./productsSection.module.css";

class ProductSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.products,
    };
  }

  handleSortProducts = (event) => {
    const { products } = this.state;

    const sortedProducts = sortProducts(event, products);

    this.setState({
      products: sortedProducts,
    });
  };

  render() {
    const { products } = this.props;

    return (
      <div className={styles.productsSection}>
        <ProductsSectionHeading sortProducts={this.handleSortProducts} />
        <ProductsInnerContainer products={products} />
      </div>
    );
  }
}

ProductSection.defaultProps = {
  products: [],
};

ProductSection.propTypes = {
  products: PropTypes.array,
};

export default ProductSection;
