import React from "react";
import ProductsInnerContainer from "./productsInnerContainer";
import ProductsSectionHeading from "./productsSectionHeading";

class productSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.products,
    };
  }

  sortProducts = (event) => {
    let value = event.target.options[event.target.selectedIndex].value;

    let sortedProducts = this.state.products;

    if (value === "priceLowToHigh") {
      sortedProducts.sort(function (a, b) {
        return a.product__newPrice - b.product__newPrice;
      });
    } else if (value === "priceHighToLow") {
      sortedProducts.sort(function (a, b) {
        return b.product__newPrice - a.product__newPrice;
      });
    }

    this.setState({
      products: sortedProducts,
    });
  };

  render() {
    console.log("from productSection", this.props.categorie);

    let products = this.props.products;

    //console.log("products", products);

    return (
      <div className="productsSection">
        <ProductsSectionHeading sortProducts={this.sortProducts} />
        <ProductsInnerContainer
          incrementCount={this.props.incrementCount}
          decrementCount={this.props.decrementCount}
          showCounter={this.props.showCounter}
          displayCounter={this.props.displayCounter}
          data={this.props.data}
          products={products}
          productCategorie={this.props.productCategorie}
          categorie={this.props.categorie}
          addItemInCart={this.props.addItemInCart}
          removeItemInCart={this.props.removeItemInCart}
          productCategorieId={this.props.productCategorieId}
        />
      </div>
    );
  }
}

export default productSection;
