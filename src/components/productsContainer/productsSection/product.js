import React from "react";
import ProductButton from "./productButton";

class Product extends React.Component {
  // console.log(this.props);

  constructor(props) {
    super(props);

    this.state = {
      count: this.props.count,
      showCounter: false,
    };
  }

  incrementCount = (id) => {
    console.log("incrementCount for product id :", id);
    //console.log("incrementCount", this.state.count);
    //console.log("incrementCount for product", this.props.product);
    this.setState((prevState) => ({
      count: parseInt(prevState.count) + 1,
    }));

    this.props.product.count = parseInt(this.state.count) + 1;

    this.props.addItemInCart(
      this.props.product.product__newPrice,
      this.props.product
    );
  };

  decrementCount = () => {
    console.log("decrementCount", this.state.count);
    this.setState(
      (prevState) => ({
        count: parseInt(prevState.count) - 1,
      }),
      () => {
        if (this.state.count === 0) {
          this.setState({
            showCounter: false,
          });
        }
      }
    );

    this.props.product.count = parseInt(this.props.product.count) - 1;

    this.props.removeItemInCart(
      this.props.product.product__newPrice,
      this.props.product
    );
  };

  displayCounter = (id) => {
    console.log("displayCounter for product id", id);
    this.setState({
      count: 1,
      showCounter: true,
    });

    this.props.product.count = 1;

    this.props.addItemInCart(
      this.props.product.product__newPrice,
      this.props.product
    );
  };

  render() {
    let showCounter = this.state.showCounter;

    if (parseInt(this.props.product.count) !== 0) {
      showCounter = true;
    }

    // console.log("showCounter", showCounter, this.props.product.count);

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
          />
        </div>
      </div>
    );
    return product;
  }
}

export default Product;
