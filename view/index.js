import productCategories from "../model/productCategories.js";
import categories from "../model/categories.js";
import data from "../model/data.js";
import addProduct from "../controller/addProduct.js";
import productCategorieElement from "../controller/productCategorieElement.js";
import productElement from "../controller/productElement.js";
import checkoutPage from "../controller/checkoutPage.js";
import filter from "../controller/filter.js";

let products = data["Vegetables & fruits"]["0"]["products"];

let categoriesList = document.querySelector(".categories");

let categoriesLength = categories.length;

function createCategoryElement(categorieName) {
  let categorie = document.createElement("li");
  categorie.innerHTML = categorieName;

  return categorie;
}

for (let i = 0; i < categoriesLength; i++) {
  let categorie = createCategoryElement(categories[i]);

  if (i == categoriesLength - 1) {
    categorie.className = "categories__more";
  }

  categoriesList.appendChild(categorie);

  categorie.addEventListener("click", () => {
    let productsContainer = document.querySelector(".checkoutProducts");
    productsContainer.innerHTML = ``;
    let checkoutPrice = document.querySelector(".checkoutPrice");

    checkoutPrice.innerHTML = ``;

    let productCategories = data[`${categories[i]}`];

    let productCategoriesNavbar = document.querySelector(
      ".productCategoriesNavbar"
    );

    let productCategoriesLength = productCategories.length;

    productCategoriesNavbar.innerHTML = "";
    let productsDiv = document.querySelector(".products");
    productsDiv.innerHTML = "";

    checkoutPrice.innerHTML = ``;

    for (let j = 0; j < productCategoriesLength; j++) {
      let productsContainer = document.querySelector(".checkoutProducts");
      productsContainer.innerHTML = ``;

      let productCategorie = productCategorieElement(productCategories[j]);
      if (j === 0) {
        productCategorie.className += " productCategory__active";
      }

      productCategoriesNavbar.appendChild(productCategorie);

      productCategorie.addEventListener("click", () => {
        let products = productCategories[j]["products"];

        console.log(products);

        let productsDiv = document.querySelector(".products");
        productsDiv.innerHTML = "";

        for (let k = 0; k < products.length; k++) {
          let product = productElement(products[k]);
          productsDiv.appendChild(product);
        }

        addProduct(products);

        //sort(products);
      });

      if (j == 0) {
        let products = productCategories[j]["products"];

        console.log(products);

        let productsDiv = document.querySelector(".products");
        productsDiv.innerHTML = "";

        for (let k = 0; k < products.length; k++) {
          let product = productElement(products[k], k);
          productsDiv.appendChild(product);
        }

        addProduct(products);
      }
    }
  });
}

let productCategoriesNavbar = document.querySelector(
  ".productCategoriesNavbar"
);

let productCategoriesLength = productCategories.length;

for (let i = 0; i < productCategoriesLength; i++) {
  let productCategorie = productCategorieElement(productCategories[i]);
  if (i === 0) {
    productCategorie.className += " productCategory__active";
  }

  productCategoriesNavbar.appendChild(productCategorie);

  productCategorie.addEventListener("click", () => {
    let productCategoriesData = data["Vegetables & fruits"][i];

    let products = productCategoriesData["products"];

    let productsDiv = document.querySelector(".products");

    productsDiv.innerHTML = "";

    for (let k = 0; k < products.length; k++) {
      let product = productElement(products[k], k);
      productsDiv.appendChild(product);
    }

    addProduct(products);
  });
}

let productsDiv = document.querySelector(".products");

for (let i = 0; i < products.length; i++) {
  let product = productElement(products[i], i);
  productsDiv.appendChild(product);
}

addProduct(data["Vegetables & fruits"]["0"]["products"]);

let categoriesMore = document.querySelector(".categories__more");

categoriesMore.innerHTML += `
<ul class="dropdown">
      <li><a href="#">Sweet Tooth</a></li>
      <li><a href="#">Atta, Rice & Dal</a></li>
      <li><a href="#">Dry Fruits, Masala & Oil</a></li>
      <li><a href="#">Sauces & Spreads</a></li>
      <li><a href="#">Chicken, Meat & Fish</a></li>
      <li><a href="#">Paan Corner</a></li>
      <li><a href="#">Organic & Premium</a></li>
</ul>
`;

let myCart = document.querySelector(".myCart");

myCart.addEventListener("click", () => {
  checkoutPage(data, categories, addProduct);
});

let categoriesDiv = document.querySelector(".categories");

categoriesDiv.addEventListener("click", () => {
  let productsSection__heading = document.querySelector(
    ".productsSection__heading"
  );

  productsSection__heading.innerHTML = `<p class="buyHeading">Buy Fresh Vegetables Online</p>

    <form class="productsSection__filter">
      <label for="sortBy" class="sortByLabel">Sort By</label>
      <select class="sortBy" id="sortBy"">
        <option value="relevence">Relevence</option>
        <option value="priceLowToHigh">Price (low to high)</option>
        <option value="priceHighToLow">Price (high to low)</option>
      </select>
    </form>`;
});

var selection = document.getElementById("sortBy");

selection.onchange = function (event) {
  var value = event.target.options[event.target.selectedIndex].value;

  console.log(value);

  let productsDiv = document.querySelector(".products");
  productsDiv.innerHTML = "";

  if (value === "priceLowToHigh") {
    products.sort(function (a, b) {
      return a.product__newPrice - b.product__newPrice;
    });
    //addProduct(products);

    for (let k = 0; k < products.length; k++) {
      let product = productElement(products[k]);
      productsDiv.appendChild(product);
    }

    addProduct(products);
  } else if (value === "priceHighToLow") {
    products.sort(function (a, b) {
      return b.product__newPrice - a.product__newPrice;
    });
    addProduct(products);

    for (let k = 0; k < products.length; k++) {
      let product = productElement(products[k]);
      productsDiv.appendChild(product);
    }

    addProduct(products);
  }
};
