let createCategoryElement = (categorieName) => {
  let categorie = document.createElement("li");
  categorie.innerHTML = categorieName;

  return categorie;
};

export default createCategoryElement;
