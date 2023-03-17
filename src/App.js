import "./App.css";
import TopNavbar from "./components/topNavbar/topNavbar";
import CategoriesNavbar from "./components/categoriesNavbar/CategoriesNavbar";
import ProductsContainer from "./components/productsContainer/productsContainer";
import Advantages from "./components/advantages/advantages";
import Footer from "./components/footerContainer/footer";
import AboutBlinkit from "./components/aboutBlinkit/aboutBlinkit";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { redirect } from "react-router-dom";
import CheckoutPage from "./components/checkoutPage/checkoutPage";
import ErrorBoundary from "./components/ErrorBoundary";
import { connect } from "react-redux";
import { addItemInCart, removeItemInCart } from "./redux/cart/cartActions";
import { changeCategorie } from "./redux/product/productActions";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categorie: "Vegetables & fruits",
    };
  }

  render() {
    //console.log("render", this.state.categorie);
    //console.log(this.state.cartData);

    return (
      <div className="App">
        <TopNavbar
          cartItemsCount={this.props.cartItemsCount}
          cartItemsValue={this.props.cartItemsValue}
          displayCartItems={this.props.displayCartItems}
        />

        <CategoriesNavbar
          data={this.props.data}
          changeCategorie={this.props.changeCategorie}
        />

        <Routes>
          {/* {["/", "/blinkit/home"].map((path, id) => ( */}
          <Route
            path="/"
            // key={id}
            // path={path}
            element={
              <>
                <ErrorBoundary>
                  {/* <DataContext.Provider value={this.props.data}> */}
                  <ProductsContainer
                    id={0}
                    data={this.props.data}
                    categorie={this.props.categorie}
                    changeCategorie={this.props.changeCategorie}
                  />
                  {/* </DataContext.Provider> */}
                </ErrorBoundary>
              </>
            }
          >
            {/* {redirect("/checkout")} */}
          </Route>
          {/* ))} */}

          <Route
            path="/checkout"
            element={
              <CheckoutPage
                data={this.props.data}
                changeCategorie={this.props.changeCategorie}
                addItemInCart={this.props.addItemInCart}
                removeItemInCart={this.props.removeItemInCart}
                cartData={this.props.cartData}
                actualPrice={this.props.actualPrice}
                mrpPrice={this.props.mrpPrice}
                totalCount={this.props.totalCount}
                dileveryCharge={this.props.dileveryCharge}
              />
            }
          />
          {/* <Route path="*" element={<Navigate to="/blinkit/home" />} /> */}
        </Routes>

        <Advantages />
        <AboutBlinkit />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartData: state.cart.cartData,
    displayCartItems: state.cart.displayCartItems,
    cartItemsCount: state.cart.cartItemsCount,
    totalCount: state.cart.totalCount,
    cartItemsValue: state.cart.cartItemsValue,
    actualPrice: state.cart.actualPrice,
    mrpPrice: state.cart.mrpPrice,
    data: state.product.data,
    categorie: state.product.categorie,
    dileveryCharge: state.product.dileveryCharge,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemInCart: (value, product) => dispatch(addItemInCart(value, product)),
    removeItemInCart: (value, product) =>
      dispatch(removeItemInCart(value, product)),
    changeCategorie: (categorie) => dispatch(changeCategorie(categorie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
