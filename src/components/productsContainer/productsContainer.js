import React from "react";
import ProductCategoriesNavbar from "./productCategoriesNavbar/productCategoriesNavbar";
import ProductsSection from "./productsSection/productSection";
import { changeProductCategorie } from "../../redux/product/productActions";
import { connect } from "react-redux";
//import data from "../../json/data";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productCategorie: this.props.productCategorie,
      id: 0,
      categorie: this.props.categorie,
      data: this.props.data,
    };
  }

  changeCategorie = (categorie) => {
    console.log("CHANGE to", categorie, "from", this.state.categorie);
    this.setState({
      categorie: categorie,
      id: 0,
    });
  };

  render() {
    console.log("ProductsContainer render");
    let categorie = this.props.categorie;
    let id = parseInt(this.props.id);

    if (categorie !== this.state.categorie) {
      this.props.changeProductCategorie(0, 0);
      this.changeCategorie(categorie);
      id = 0;
    }

    console.log("categorie", categorie, "categorie", this.state.categorie);
    console.log("id", id);

    let data = this.props.data;
    //console.log("data", data);
    let productCategories = data[categorie];
    console.log("productCategories", productCategories);
    let products = productCategories[id]["products"];
    console.log("products", products);
    let productCategorie = productCategories[id]["productCategory__name"];

    if (!data) {
      return new Error("Something went wrong");
    }

    return (
      <>
        <div className="productsContainer">
          <ProductCategoriesNavbar
            changeProductCategorie={this.props.changeProductCategorie}
            productCategories={productCategories}
          />
          <ProductsSection
            products={products}
            data={data}
            productCategorie={productCategorie}
            categorie={categorie}
            productCategorieId={id}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productCategorie: state.product.productCategorie,
    id: state.product.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeProductCategorie: (e, id, productCategorie) =>
      dispatch(changeProductCategorie(id, productCategorie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
