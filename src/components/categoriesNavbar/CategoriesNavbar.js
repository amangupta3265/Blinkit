import React from "react";
import Categorie from "./categorie";

function CategoriesNavbar(props) {
  //const data = this.data;
  // let categories = [
  //   "Vegetables & fruits",
  //   "Dairy & Breakfast",
  //   "Munchies",
  //   "Cold Drinks & Juices",
  //   "Instant & Frozen Food",
  //   "Tea, Coffee & Health Drinks",
  //   "Bakery & Biscuits",
  //   "More",
  // ];

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

  return <ul className="categories flexRow">{listItems}</ul>;
}

export default CategoriesNavbar;
