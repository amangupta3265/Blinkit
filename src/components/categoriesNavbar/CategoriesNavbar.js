import React from "react";
import Categorie from "./categorie";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { changeCategorie } from "../../redux/product/productActions";

function CategoriesNavbar(props) {
  let categories = props.categories;

  const navigate = useNavigate();

  let gotoHomePage = () => {
    navigate("/");
  };

  const listItems = categories.map((categorie, id) => {
    return (
      <Categorie
        key={id}
        categorieName={categorie}
        data={props.data}
        changeCategorie={props.changeCategorie}
      />
    );
  });

  return (
    <ul className="categories flexRow" onClick={gotoHomePage}>
      {listItems}
    </ul>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCategorie: (categorie) => dispatch(changeCategorie(categorie)),
  };
};

export default connect(null, mapDispatchToProps)(CategoriesNavbar);
