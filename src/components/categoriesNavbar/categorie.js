import React from "react";

function Categorie(props) {
  return (
    <li onClick={() => props.changeCategorie(props.categorieName)}>
      {props.categorieName}
    </li>
  );
}

export default Categorie;
