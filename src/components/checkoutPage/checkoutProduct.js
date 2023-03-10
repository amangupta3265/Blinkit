import React from "react";
import ProductButton from "../productsContainer/productsSection/productButton";

class Product extends React.Component {
  // console.log(this.props);

  constructor(props) {
    super(props);

    this.state = {
      count: this.props.product.count,
      showCounter: false,
    };
  }

  incrementCount = () => {
    // console.log("incrementCount", this.state.count);
    // console.log("incrementCount for product", this.props.product);
    this.setState((prevState) => ({
      count: parseInt(prevState.count) + 1,
    }));

    this.props.product.count = this.state.count + 1;

    this.props.addItemInCart(
      this.props.product.product__newPrice,
      this.props.product
    );
  };

  decrementCount = () => {
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

    this.props.product.count = this.state.count - 1;

    this.props.removeItemInCart(
      this.props.product.product__newPrice,
      this.props.product
    );
  };

  displayCounter = () => {
    //console.log("from child");
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

    if (parseInt(this.state.count) !== 0) {
      showCounter = true;
    }

    let product = (
      <div className="checkout__product flexRow">
        <div className="flexRow">
          <div className="product__image">
            <div className="product__offer">
              {this.props.product.product__offer}
            </div>
            <img src={this.props.product.product__image} alt="" />
          </div>
          <div>
            <div className="product__name">
              {this.props.product.product__name}
            </div>
            <div className="product__weight">
              {this.props.product.product__weight}
            </div>
            <div className="product__details">
              <div className="product__price">
                <span className="product__newPrice">
                  <span>&#8377;</span>
                  <span>{this.props.product.product__newPrice}</span>
                </span>
                <span className="product__oldPrice">
                  <span>&#8377;</span>
                  <span>{this.props.product.product__oldPrice}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <ProductButton
          displayCounter={this.displayCounter}
          showCounter={showCounter}
          incrementCount={this.incrementCount}
          decrementCount={this.decrementCount}
          count={this.state.count}
        />
      </div>
    );
    return product;
  }
}

export default Product;
