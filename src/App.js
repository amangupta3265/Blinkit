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
// import { connect } from "react-redux";
// import { changeCategorie } from "./redux/product/productActions";

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
        <TopNavbar />

        <CategoriesNavbar />

        <Routes>
          {/* {["/", "/blinkit/home"].map((path, id) => ( */}
          <Route
            path="/"
            // key={id}
            // path={path}
            element={
              <>
                <ErrorBoundary>
                  <ProductsContainer />
                </ErrorBoundary>
              </>
            }
          >
            {/* {redirect("/checkout")} */}
          </Route>
          {/* ))} */}

          <Route path="/checkout" element={<CheckoutPage />} />
          {/* <Route path="*" element={<Navigate to="/blinkit/home" />} /> */}
        </Routes>

        <Advantages />
        <AboutBlinkit />
        <Footer />
      </div>
    );
  }
}

export default App;

/*
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
    // addItemInCart: (value, product) => dispatch(addItemInCart(value, product)),
    // removeItemInCart: (value, product) =>
    //   dispatch(removeItemInCart(value, product)),
    changeCategorie: (categorie) => dispatch(changeCategorie(categorie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

*/
