import React from "react";
import ProductButton from "./productButton";

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
    console.log(this.state.count);
    this.setState((prevState) => ({
      count: parseInt(prevState.count) + 1,
    }));

    this.props.addItemInCart(this.props.product.product__newPrice);
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

    this.props.removeItemInCart(this.props.product.product__newPrice);
  };

  displayCounter = () => {
    console.log("from child");
    this.setState({
      count: 1,
      showCounter: true,
    });

    this.props.addItemInCart(this.props.product.product__newPrice);
  };

  render() {
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
              {this.props.product.product__newPrice}
            </span>
            <span className="product__oldPrice">
              {this.props.product.product__oldPrice}
            </span>
          </div>
          <ProductButton
            displayCounter={this.displayCounter}
            showCounter={this.state.showCounter}
            incrementCount={this.incrementCount}
            decrementCount={this.decrementCount}
            count={this.state.count}
          />
        </div>
      </div>
    );
    return product;
  }
}

export default Product;
