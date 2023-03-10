import React from "react";
import Categorie from "./categorie";
import { useNavigate } from "react-router-dom";

function CategoriesNavbar(props) {
  let categories = Object.keys(props.data);

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

export default CategoriesNavbar;
