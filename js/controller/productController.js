import productModel from "../model/productModel.js";
import productView from "../view/productView.js";
import cartController from "./cartController.js";

let cartData = new Map();

window.localStorage.clear();
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

    products[i]["count"] = count;
  },

  decrementCount: function (products, i, j) {
    let count = parseInt(products[i]["count"]);

    let productQuantityDiv = document.querySelectorAll(".product__quantity");

    if (count > 0) {
      count--;

      productQuantityDiv[i].children[1].children[1].innerText = count;

      products[i]["count"] = count;
    }
    if (count === 0) {
      productQuantityDiv[i].childNodes[1].style = "display:none";
      productQuantityDiv[i].childNodes[0].style = "display:block";
      products[i]["count"] = 0;
      window.localStorage.removeItem(j * 100 + i);
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

    cartItemsCount--;
    cartItemsValue -= parseInt(products[i]["product__newPrice"]);

    window.localStorage.setItem("cartItemsCount", cartItemsCount);
    window.localStorage.setItem("cartItemsValue", cartItemsValue);

    productController.updateCart();
  },

  eventListeners: function (products, j) {
    let productQuantityDivList =
      document.querySelectorAll(".product__quantity");

    let k = 0;
    productQuantityDivList.forEach((productQuantityDiv, i) => {
      let count = 0;
      k++;
      console.log(k);

      count = parseInt(products[i]["count"]);

      productQuantityDiv.children[1].children[1].id = `count_${i}`;
      const countEl = document.getElementById(`count_${i}`);

      if (count !== 0) {
        productQuantityDiv.childNodes[1].style = "display:block";
        productQuantityDiv.childNodes[0].style = "display:none";
        countEl.textContent = count;
      }

      productQuantityDiv.addEventListener("click", function (event) {
        productController.attachEventListener(
          event,
          products,
          i,
          count,
          productQuantityDiv,
          j
        );
      });
    });
  },

  attachEventListener: function (
    event,
    products,
    i,
    count,
    productQuantityDiv,
    j
  ) {
    let myCartItems = document.querySelector(".myCart__items");
    productQuantityDiv.children[1].children[1].id = `count_${i}`;

    const countEl = document.getElementById(`count_${i}`);

    let cartItemsCount = parseInt(
      window.localStorage.getItem("cartItemsCount")
    );
    let cartItemsValue = parseInt(
      window.localStorage.getItem("cartItemsValue")
    );

    if (window.localStorage.getItem(j * 100 + i) === null) {
      window.localStorage.setItem(j * 100 + i, i);
      productQuantityDiv.childNodes[1].style = "display:block";
      productQuantityDiv.childNodes[0].style = "display:none";
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
      productController.incrementCount(products, i);
      productController.incrementCart(products, i);
    } else if (event.target.textContent === "-") {
      productController.decrementCount(products, i, j);
      productController.decrementCart(products, i);
    }

    cartData.set(j * 100 + i, products[i]);

    productController.setCartData();
  },
};

export default productController;
