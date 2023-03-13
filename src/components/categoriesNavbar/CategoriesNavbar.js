import React from "react";
import Categorie from "./categorie";
import { Link } from "react-router-dom";

function CategoriesNavbar(props) {
  let categories = Object.keys(props.data);

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
    <Link to="/" style={{ textDecoration: "none" }}>
      <ul className="categories flexRow">{listItems}</ul>
    </Link>
  );
}

export default CategoriesNavbar;
