import React from "react";
import { connect } from "react-redux";
import {
  decrementCount,
  displayCounter,
  incrementCount,
} from "../../../redux/product/productActions";
import ProductButton from "./productButton";

class Product extends React.Component {
  // console.log(this.props);

  constructor(props) {
    super(props);

    this.state = {
      count: this.props.count,
    };
  }

  render() {
    let showCounter = this.props.showCounter;

    if (parseInt(this.props.product.count) !== 0) {
      showCounter = true;
    }

    if (parseInt(this.props.product.count) === 0) {
      showCounter = false;
    }

    //console.log("showCounter", showCounter, this.props.product.count);

    let product = (
      <div className="products__product">
        <div className="product__image">
          <div className="product__offer">
            {this.props.product.product__offer}
          </div>
          <img src={this.props.product.product__image} alt="" />
          <div className="product__sourced">
            {this.props.product.product__sourced}
          </div>
        </div>
        <div className="product__name">{this.props.product.product__name}</div>
        <div className="product__weight">
          {this.props.product.product__weight}
        </div>
        <div className="product__details">
          <div className="product__price">
            <span className="product__newPrice">
              ₹{this.props.product.product__newPrice}
            </span>
            <span className="product__oldPrice">
              ₹{this.props.product.product__oldPrice}
            </span>
          </div>
          <ProductButton
            displayCounter={this.props.displayCounter}
            showCounter={showCounter}
            incrementCount={this.props.incrementCount}
            decrementCount={this.props.decrementCount}
            count={this.props.product.count}
            id={this.props.id}
            product={this.props.product}
            categorie={this.props.categorie}
            productCategorie={this.props.productCategorie}
            productCategorieId={this.props.productCategorieId}
          />
        </div>
      </div>
    );
    return product;
  }
}

const mapStateToProps = (state) => {
  return {
    showCounter: state.product.showCounter,
    count: state.product.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayCounter: () => dispatch(displayCounter()),
    incrementCount: (id) => dispatch(incrementCount(id)),
    decrementCount: (id) => dispatch(decrementCount(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
