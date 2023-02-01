import styles from "../../categoriesNavbar/categoriesNavbar.module.css";

function getDropdown(changeCategorie, categoriesData) {
  const categories = categoriesData["categories"];

  const dropDownList = [];

  categories.forEach((value) => {
    if (value.id > 6) {
      dropDownList.push(
        <li
          key={value.id}
          className={styles.dropdown__category}
          onClick={() => changeCategorie(value.id)}
        >
          {value["name"]}
        </li>
      );
    }
  });

  return dropDownList;
}

export { getDropdown };
