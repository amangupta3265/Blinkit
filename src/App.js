import "./App.css";
import TopNavbar from "./components/topNavbar/topNavbar";
import CategoriesNavbar from "./components/categoriesNavbar/CategoriesNavbar";
import ProductsContainer from "./components/productsContainer/productsContainer";
import Advantages from "./components/advantages/advantages";
import Footer from "./components/footerContainer/footer";
import AboutBlinkit from "./components/aboutBlinkit/aboutBlinkit";
import data from "./json/data";
import React from "react";
import { DataContext } from "./components/dataContex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutPage from "./components/checkoutPage/checkoutPage";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categorie: "Vegetables & fruits",
      cartItemsCount: 0,
      cartItemsValue: 0,
      displayCartItems: false,
      cartData: new Map(),
      mrpPrice: 0,
      actualPrice: 0,
      dileveryCharge: 10,
      totalCount: 0,
    };
  }

  changeCategorie = (categorie) => {
    console.log("categorie got changed", categorie);

    this.setState({
      categorie: categorie,
    });
  };

  addItemInCart = (itemValue, product) => {
    console.log("item value", itemValue);
    if (!this.state.displayCartItems) {
      this.setState({
        displayCartItems: true,
      });
    }

    let cartData = this.state.cartData;
    let id = product["product__id"];
    cartData.set(id, product);

    //console.log("product in addItemInCart", product);

    this.setState({
      cartItemsCount: parseInt(this.state.cartItemsCount) + 1,
      cartItemsValue: parseInt(this.state.cartItemsValue) + parseInt(itemValue),
      cartData: cartData,
      totalCount: parseInt(this.state.totalCount) + 1,
      actualPrice:
        parseInt(this.state.actualPrice) +
        parseInt(product["product__newPrice"]),
      mrpPrice:
        parseInt(this.state.mrpPrice) + parseInt(product["product__oldPrice"]),
    });
  };

  removeItemInCart = (itemValue, product) => {
    let cartData = this.state.cartData;
    let id = product["product__id"];
    cartData.set(id, product);

    this.setState(
      {
        cartItemsCount: parseInt(this.state.cartItemsCount) - 1,
        cartItemsValue:
          parseInt(this.state.cartItemsValue) - parseInt(itemValue),
        cartData: cartData,
        totalCount: parseInt(this.state.totalCount) - 1,
        actualPrice:
          parseInt(this.state.actualPrice) -
          parseInt(product["product__newPrice"]),
        mrpPrice:
          parseInt(this.state.mrpPrice) -
          parseInt(product["product__oldPrice"]),
      },
      () => {
        if (this.state.cartItemsCount === 0) {
          cartData.delete(id);
          this.setState({
            displayCartItems: false,
            cartData: cartData,
          });
        }
      }
    );
  };

  render() {
    //console.log("render", this.state.categorie);
    //console.log(this.state.cartData);

    return (
      <div className="App">
        <TopNavbar
          cartItemsCount={this.state.cartItemsCount}
          cartItemsValue={this.state.cartItemsValue}
          displayCartItems={this.state.displayCartItems}
        />

        <CategoriesNavbar data={data} changeCategorie={this.changeCategorie} />

        <Routes>
          {["/", "/home"].map((path, id) => (
            <Route
              key={id}
              path={path}
              element={
                <>
                  <ErrorBoundary>
                    <DataContext.Provider value={data}>
                      <ProductsContainer
                        data={data}
                        categorie={this.state.categorie}
                        addItemInCart={this.addItemInCart}
                        removeItemInCart={this.removeItemInCart}
                      />
                    </DataContext.Provider>
                  </ErrorBoundary>
                </>
              }
            />
          ))}

          <Route
            path="/checkout"
            element={
              <CheckoutPage
                addItemInCart={this.addItemInCart}
                removeItemInCart={this.removeItemInCart}
                cartData={this.state.cartData}
                actualPrice={this.state.actualPrice}
                mrpPrice={this.state.mrpPrice}
                totalCount={this.state.totalCount}
                dileveryCharge={this.state.dileveryCharge}
              />
            }
          />
        </Routes>

        <Advantages />
        <AboutBlinkit />
        <Footer />
      </div>
    );
  }
}

export default App;
