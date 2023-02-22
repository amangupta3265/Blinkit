import productModel from "../model/productModel.js";
import productView from "../view/productView.js";
import cartController from "./cartController.js";

let k = 0;
let cartData = new Map();

window.localStorage.setItem("cartItemsCount", 0);
window.localStorage.setItem("cartItemsValue", 0);

const productController = {
  init: (data) => {
    //console.log("from product ", data);
    productModel.setData(data);
    productView.render();
  },

  getData: function () {
    return productModel.productData;
  },

  setCartData: function () {
    cartController.init(cartData);
  },

  incrementCount: function (products, i) {
    let productQuantityDiv = document.querySelectorAll(".product__quantity");
    let count = parseInt(products[i]["count"]);

    count++;
    productQuantityDiv[i].children[1].children[1].innerText = count;
    console.log(productQuantityDiv[i].children[1].children[1].textContent);

    products[i]["count"] = count;
  },

  decrementCount: function (products, i) {
    let count = parseInt(products[i]["count"]);

    let productQuantityDiv = document.querySelectorAll(".product__quantity");

    if (count > 0) {
      count--;
      console.log(count);

      productQuantityDiv[i].children[1].children[1].innerText = count;

      cartItemsValue -= parseInt(products[i]["product__newPrice"]);

      products[i]["count"] = count;
    }
    if (count === 0) {
      productQuantityDiv[i].childNodes[1].style = "display:none";
      productQuantityDiv[i].childNodes[0].style = "display:block";
    }
  },

  updateCart: function () {
    let cartItemsCount = parseInt(
      window.localStorage.getItem("cartItemsCount")
    );
    let cartItemsValue = parseInt(
      window.localStorage.getItem("cartItemsValue")
    );

    let myCartItems = document.querySelector(".myCart__items");

    myCartItems.innerHTML = `
        <div>${cartItemsCount} items</div>
        <div><span>&#8377;</span>${cartItemsValue}</div>
        `;
  },

  incrementCart: function (products, i) {
    let cartItemsCount = parseInt(
      window.localStorage.getItem("cartItemsCount")
    );
    let cartItemsValue = parseInt(
      window.localStorage.getItem("cartItemsValue")
    );

    cartItemsCount++;
    cartItemsValue += parseInt(products[i]["product__newPrice"]);

    window.localStorage.setItem("cartItemsCount", cartItemsCount);
    window.localStorage.setItem("cartItemsValue", cartItemsValue);

    productController.updateCart();
  },

  decrementCart: function (products, i) {
    let cartItemsCount = parseInt(
      window.localStorage.getItem("cartItemsCount")
    );
    let cartItemsValue = parseInt(
      window.localStorage.getItem("cartItemsValue")
    );

    cartItemsCount++;
    cartItemsValue -= parseInt(products[i]["product__newPrice"]);

    window.localStorage.setItem("cartItemsCount", cartItemsCount);
    window.localStorage.setItem("cartItemsValue", cartItemsValue);

    productController.updateCart();
  },

  eventListeners: function (products) {
    let productQuantityDiv = document.querySelectorAll(".product__quantity");

    for (let i = 0; i < productQuantityDiv.length; i++) {
      let count = 0;
      k++;
      count = parseInt(products[i]["count"]);

      productQuantityDiv[i].children[1].children[1].id = `count_${i}`;
      const countEl = document.getElementById(`count_${i}`);

      let myCartItems = document.querySelector(".myCart__items");

      if (count !== 0) {
        productQuantityDiv[i].childNodes[1].style = "display:block";
        productQuantityDiv[i].childNodes[0].style = "display:none";
        countEl.textContent = count;
      }

      productQuantityDiv[i].addEventListener("click", function (event) {
        productQuantityDiv[i].children[1].children[1].id = `count_${i}`;

        const countEl = document.getElementById(`count_${i}`);

        let cartItemsCount = parseInt(
          window.localStorage.getItem("cartItemsCount")
        );
        let cartItemsValue = parseInt(
          window.localStorage.getItem("cartItemsValue")
        );

        if (count === 0) {
          productQuantityDiv[i].childNodes[1].style = "display:block";
          productQuantityDiv[i].childNodes[0].style = "display:none";
          count = 1;
          cartItemsCount += count;
          cartItemsValue += parseInt(products[i]["product__newPrice"]);

          window.localStorage.setItem("cartItemsCount", cartItemsCount);
          window.localStorage.setItem("cartItemsValue", cartItemsValue);

          countEl.innerText = count;
          myCartItems.innerHTML = `
              <div>${cartItemsCount} items</div>
              <div><span>&#8377;</span><span>${cartItemsValue}</span></div>
              `;

          products[i]["count"] = 1;
        }

        if (event.target.textContent === "+") {
          console.log(products);
          productController.incrementCount(products, i);
          productController.incrementCart(products, i);
        } else if (event.target.textContent === "-") {
          productController.decrementCount(products, i);
          productController.decrementCart(products, i);
        }

        cartData.set(k + i, products[i]);

        productController.setCartData();
      });
    }
  },
};

export default productController;
