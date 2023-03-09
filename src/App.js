import logo from "./logo.svg";
import "./App.css";
import TopNavbar from "./components/topNavbar/topNavbar";
import CategoriesNavbar from "./components/categoriesNavbar/CategoriesNavbar";
//import ProductsContainer from "./components/productsContainer/productsContainer";
import ProductsContainer from "./components/productsContainer/productsContainer";
import Advantages from "./components/advantages/advantages";
import Footer from "./components/footerContainer/footer";
import AboutBlinkit from "./components/aboutBlinkit/aboutBlinkit";
import data from "./json/data";
import React from "react";
import { DataContext } from "./components/dataContex";

// const DataContext = React.createContext();

// const DataProvider = DataContext.Provider;
// const DataConsumer = DataContext.Consumer;

class App extends React.Component {
  // console.log(data);

  constructor(props) {
    super(props);

    this.state = {
      categorie: "Vegetables & fruits",
      cartItemsCount: 0,
      cartItemsValue: 0,
      displayCartItems: false,
    };
  }

  changeCategorie = (categorie) => {
    console.log("categorie got changed", categorie);

    this.setState({
      categorie: categorie,
    });
  };

  addItemInCart = (itemValue) => {
    console.log("item value", itemValue);
    if (!this.state.displayCartItems) {
      this.setState({
        displayCartItems: true,
      });
    }

    this.setState({
      cartItemsCount: parseInt(this.state.cartItemsCount) + 1,
      cartItemsValue: parseInt(this.state.cartItemsValue) + parseInt(itemValue),
    });
  };

  removeItemInCart = (itemValue) => {
    this.setState(
      {
        cartItemsCount: parseInt(this.state.cartItemsCount) - 1,
        cartItemsValue:
          parseInt(this.state.cartItemsValue) - parseInt(itemValue),
      },
      () => {
        if (this.state.cartItemsCount === 0) {
          this.setState({
            displayCartItems: false,
          });
        }
      }
    );
  };

  render() {
    console.log("render", this.state.categorie);
    //console.log(DataProvider);
    return (
      <div className="App">
        <TopNavbar
          cartItemsCount={this.state.cartItemsCount}
          cartItemsValue={this.state.cartItemsValue}
          displayCartItems={this.state.displayCartItems}
        />
        <CategoriesNavbar data={data} changeCategorie={this.changeCategorie} />

        <DataContext.Provider value={data}>
          <ProductsContainer
            data={data}
            categorie={this.state.categorie}
            addItemInCart={this.addItemInCart}
            removeItemInCart={this.removeItemInCart}
          />
        </DataContext.Provider>

        <Advantages />
        <AboutBlinkit />
        <Footer />
      </div>
    );
  }
}

export default App;
