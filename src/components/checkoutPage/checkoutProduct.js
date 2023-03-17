import React from "react";
import { connect } from "react-redux";
import { displayCounter } from "../../redux/product/productActions";
import ProductButton from "../productsContainer/productsSection/productButton";

class Product extends React.Component {
  // console.log(this.props);

  constructor(props) {
    super(props);

    this.state = {
      data: this.props,
      //count: this.props.count,
      showCounter: false,
    };
  }

  render() {
    let showCounter = this.props.showCounter;

    if (parseInt(this.props.count) !== 0) {
      showCounter = true;
    }

    if (parseInt(this.props.count) === 0) {
      //this.props.displayCounter(false);
      showCounter = false;
    }

    console.log("checkout product", this.state.data);

    let product = (
      <div className="checkout__product flexRow">
        <div className="flexRow">
          <div className="product__image">
            <div className="product__offer">
              {this.state.data.product.product__offer}
            </div>
            <img src={this.state.data.product.product__image} alt="" />
          </div>
          <div>
            <div className="product__name">
              {this.state.data.product.product__name}
            </div>
            <div className="product__weight">
              {this.state.data.product.product__weight}
            </div>
            <div className="product__details">
              <div className="product__price">
                <span className="product__newPrice">
                  <span>&#8377;</span>
                  <span>{this.state.data.product.product__newPrice}</span>
                </span>
                <span className="product__oldPrice">
                  <span>&#8377;</span>
                  <span>{this.state.data.product.product__oldPrice}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <ProductButton
          // displayCounter={this.props.displayCounter}
          showCounter={showCounter}
          id={this.state.data.id}
          productCategorieId={this.props.productCategorieId}
          categorie={this.state.data.categorie}
          product={this.props.product}
          // incrementCount={this.incrementCount}
          // decrementCount={this.decrementCount}
          count={this.props.product.count}
        />
      </div>
    );
    return product;
  }
}

const mapStateToProps = (state) => {
  return {
    // showCounter: state.product.showCounter,
    count: state.product.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //displayCounter: (id) => dispatch(displayCounter(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
