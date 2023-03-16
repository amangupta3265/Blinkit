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
      count: this.props.product.count,
      showCounter: false,
    };
  }

  // incrementCount = () => {
  //   // console.log("incrementCount", this.state.count);
  //   // console.log("incrementCount for product", this.props.product);
  //   this.setState((prevState) => ({
  //     count: parseInt(prevState.count) + 1,
  //   }));

  //   this.props.product.count = this.state.count + 1;

  //   this.props.addItemInCart(
  //     this.props.product.product__newPrice,
  //     this.props.product
  //   );
  // };

  // decrementCount = () => {
  //   this.setState(
  //     (prevState) => ({
  //       count: parseInt(prevState.count) - 1,
  //     }),
  //     () => {
  //       if (this.state.count === 0) {
  //         this.setState({
  //           showCounter: false,
  //         });
  //       }
  //     }
  //   );

  //   this.props.product.count = this.state.count - 1;

  //   this.props.removeItemInCart(
  //     this.props.product.product__newPrice,
  //     this.props.product
  //   );
  // };

  // displayCounter = () => {
  //   //console.log("from child");
  //   this.setState({
  //     count: 1,
  //     showCounter: true,
  //   });

  //   this.props.product.count = 1;

  //   this.props.addItemInCart(
  //     this.props.product.product__newPrice,
  //     this.props.product
  //   );
  // };

  render() {
    let showCounter = this.state.showCounter;

    if (parseInt(this.state.count) !== 0) {
      showCounter = true;
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
          displayCounter={this.props.displayCounter}
          showCounter={this.props.showCounter}
          id={this.state.data.id}
          productCategorieId={this.state.data.productCategorieId}
          categorie={this.state.data.categorie}
          product={this.state.data.product}
          // incrementCount={this.incrementCount}
          // decrementCount={this.decrementCount}
          count={this.state.data.product.count}
        />
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
    // incrementCount: (id) => dispatch(incrementCount(id)),
    // decrementCount: (id) => dispatch(decrementCount(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
