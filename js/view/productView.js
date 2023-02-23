import productController from "../controller/productController.js";
import createProductCategorieElement from "../helpers/createProductCategorieElement.js";
import productElement from "../helpers/productElement.js";
import createCategoryElement from "../helpers/createCategoryElement.js";
import cartView from "./cartView.js";

let productView = {
  render: function () {
    let data = productController.getData();

    let categories = Object.keys(data);

    let productCategories = data[categories[0]];

    let categoriesList = document.querySelector(".categories");

    let categoriesLength = categories.length;

    categories.forEach((categorieElement, i) => {
      let categorie = createCategoryElement(categorieElement);

      if (i == categoriesLength - 1) {
        categorie.className = "categories__more";
      }

      categoriesList.appendChild(categorie);

      categorie.addEventListener("click", () => {
        let productsContainer = document.querySelector(".checkoutProducts");
        productsContainer.innerHTML = ``;
        let checkoutPrice = document.querySelector(".checkoutPrice");

        checkoutPrice.innerHTML = ``;

        let productCategories = data[`${categorieElement}`];

        let productCategoriesNavbar = document.querySelector(
          ".productCategoriesNavbar"
        );

        productCategoriesNavbar.innerHTML = "";

        this.listnerOnProductCategories(productCategories);
      });
    });

    this.listnerOnProductCategories(productCategories);

    this.createDropdown();

    let myCart = document.querySelector(".myCart");

    myCart.addEventListener("click", () => {
      cartView.render();
    });

    this.clickOnNavbar();
  },

  createDropdown: () => {
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
  },

  clickOnNavbar: () => {
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
  },

  listnerOnProducts: function (j, productCategories) {
    let products = productCategories[j]["products"];

    //console.log(products);

    let productsDiv = document.querySelector(".products");
    productsDiv.innerHTML = "";

    this.renderProducts(products);

    productController.eventListeners(products, j);
  },

  renderProducts: function (products) {
    console.log(products);
    let productsDiv = document.querySelector(".products");
    productsDiv.innerHTML = "";

    products.forEach((product) => {
      product = productElement(product);
      productsDiv.appendChild(product);
    });
  },

  renderProductCategories: function (
    productCategories,
    productCategorieElement,
    i
  ) {
    let productCategoriesNavbar = document.querySelector(
      ".productCategoriesNavbar"
    );

    let productCategorie = createProductCategorieElement(
      productCategorieElement
    );
    if (i === 0) {
      productCategorie.className += " productCategory__active";
      this.listnerOnProducts(i, productCategories);
    }

    productCategoriesNavbar.appendChild(productCategorie);

    productCategorie.addEventListener("click", () => {
      this.listnerOnProducts(i, productCategories);
    });
  },

  listnerOnProductCategories: function (productCategories) {
    productCategories.forEach((productCategorieElement, j) => {
      let productsContainer = document.querySelector(".checkoutProducts");
      productsContainer.innerHTML = ``;

      this.renderProductCategories(
        productCategories,
        productCategorieElement,
        j
      );
    });
  },
};

export default productView;
