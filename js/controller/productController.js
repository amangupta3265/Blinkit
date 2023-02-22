import productModel from "../model/productModel.js";
import productView from "../view/productView.js";
import cartController from "./cartController.js";

let k = 0;
let cartData = new Map();
let cartItemsCount = 0;
let cartItemsValue = 0;

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
    //console.log(myCartItems.children[1].children[1]);
    console.log("cartItemsCount", cartItemsCount);
    console.log("cartItemsValue", cartItemsValue);

    let productQuantityDiv = document.querySelectorAll(".product__quantity");
    let count = parseInt(products[i]["count"]);

    count++;
    //cartItemsCount++;
    productQuantityDiv[i].children[1].children[1].innerText = count;
    console.log(productQuantityDiv[i].children[1].children[1].textContent);
    //cartItemsValue += parseInt(products[i]["product__newPrice"]);

    products[i]["count"] = count;

    console.log("cartItemsCount", cartItemsCount);
    console.log("cartItemsValue", cartItemsValue);
  },

  decrementCount: function (products, i) {
    let count = parseInt(products[i]["count"]);

    let productQuantityDiv = document.querySelectorAll(".product__quantity");

    if (count > 0) {
      count--;
      console.log(count);
      //console.log(cartItemsCount);
      productQuantityDiv[i].children[1].children[1].innerText = count;
      //cartItemsCount--;
      cartItemsValue -= parseInt(products[i]["product__newPrice"]);

      products[i]["count"] = count;
    } else if (count === 0) {
      productQuantityDiv[i].childNodes[1].style = "display:none";
      productQuantityDiv[i].childNodes[0].style = "display:block";
    }
  },

  updateCart: function () {
    let myCartItems = document.querySelector(".myCart__items");

    myCartItems.innerHTML = `
        <div>${cartItemsCount} items</div>
        <div><span>&#8377;</span>${cartItemsValue}</div>
        `;
  },

  incrementCart: function (products, i) {
    cartItemsCount++;
    cartItemsValue += parseInt(products[i]["product__newPrice"]);

    productController.updateCart();
  },

  decrementCart: function (products, i) {
    cartItemsCount++;
    cartItemsValue -= parseInt(products[i]["product__newPrice"]);

    productController.updateCart();
  },

  eventListeners: function (products) {
    //console.log(products);

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

        if (productQuantityDiv[i].childNodes[0].textContent === "ADD") {
          productQuantityDiv[i].childNodes[1].style = "display:block";
          productQuantityDiv[i].childNodes[0].style = "display:none";
          count = 1;
          cartItemsCount = count;
          cartItemsValue = parseInt(products[i]["product__newPrice"]);
          countEl.innerText = count;
          myCartItems.innerHTML = `
              <div>${cartItemsCount} items</div>
              <div><span>&#8377;</span><span>${cartItemsValue}</span></div>
              `;
        }

        if (event.target.textContent === "+") {
          productController.incrementCount(products, i);
          productController.incrementCart(products, i);
        } else if (event.target.textContent === "-") {
          productController.decrementCount(products, i);
          productController.decrementCart(products, i);
        }

        //products[i]["count"] = count;
        cartData.set(k + i, products[i]);

        productController.setCartData();
      });
    }

    // this.setCartData();
  },
};

export default productController;
