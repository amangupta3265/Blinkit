import logo from "./logo.svg";
import "./App.css";
import TopNavbar from "./components/topNavbar/topNavbar";
import CategoriesNavbar from "./components/categoriesNavbar/CategoriesNavbar";
//import ProductsContainer from "./components/productsContainer/productsContainer";
import ProductsContainer from "./components/productsContainer/productsContainer";
import Advantages from "./components/advantages/advantages";
import Footer from "./components/footerContainer/footer";
import AboutBlinkit from "./components/aboutBlinkit/aboutBlinkit";
import data from "./json/data.json";

function App() {
  // console.log(data);
  return (
    <div className="App">
      <TopNavbar />
      <CategoriesNavbar data={data} />
      <ProductsContainer data={data} />
      <Advantages />
      <AboutBlinkit />
      <Footer />
    </div>
  );
}

export default App;
