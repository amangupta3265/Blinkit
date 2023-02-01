import React from "react";
import TopNavbar from "../../organisms/topNavbar";
import CategoriesNavbar from "../../molecules/categoriesNavbar";

import ProductsContainer from "./organisms/productsContainer";
import AboutBlinkit from "../../atoms/aboutBlinkit";
import Footer from "../../molecules/footer";
import Advantages from "../../molecules/advantages/";
import ErrorBoundary from "../../atoms/errorBoundary";
import PropTypes from "prop-types";
import lodash from "lodash";
import { connect } from "react-redux";

function Home(props) {
  const { categoryId, changeCategory } = props;

  return (
    <>
      <TopNavbar />

      <CategoriesNavbar changeCategory={changeCategory} />

      <ErrorBoundary>
        <ProductsContainer categoryId={categoryId} />
      </ErrorBoundary>
      <Advantages />
      <AboutBlinkit />
      <Footer />
    </>
  );
}

Home.propTypes = {
  categoryId: PropTypes.number,
  changeCategory: PropTypes.func,
};

Home.defaultProps = {
  categoryId: 0,
  changeCategory: lodash.noop,
};

export default Home;
