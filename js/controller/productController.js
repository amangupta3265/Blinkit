import productModel from "../model/productModel.js";
import productView from "../view/productView.js";
import cartModel from "../model/cartModel.js";
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

  eventListeners: function (products) {
    //console.log(products);

    let productQuantityDiv = document.querySelectorAll(".product__quantity");

    let myCartItems = document.querySelector(".myCart__items");

    for (let i = 0; i < productQuantityDiv.length; i++) {
      //console.log(k);
      let count = 0;
      k++;
      count = parseInt(products[i]["count"]);

      //console.log(productQuantityDiv[i].firstChild);
      //console.log(productQuantityDiv[i].childNodes[1]);
      //console.log(productQuantityDiv[i]);

      //count = 1;

      let countEl = productQuantityDiv[i].childNodes[1].childNodes[3];

      if (count !== 0) {
        productQuantityDiv[i].childNodes[1].style = "display:block";
        productQuantityDiv[i].childNodes[0].style = "display:none";
        countEl.textContent = count;
      }

      productQuantityDiv[i].addEventListener("click", (event) => {
        // console.log(k);

        //console.log(productQuantityDiv[i]);

        if (productQuantityDiv[i].childNodes[0].textContent === "ADD") {
          productQuantityDiv[i].childNodes[1].style = "display:block";
          productQuantityDiv[i].childNodes[0].style = "display:none";
          count = 1;
          cartItemsCount += count;
          cartItemsValue += parseInt(products[i]["product__newPrice"]);
          productQuantityDiv[i].childNodes[1].childNodes[3].textContent = count;
          myCartItems.innerHTML = `
              <div>${cartItemsCount} items</div>
              <div><span>&#8377;</span>${cartItemsValue}</div>
              `;

          //   window.localStorage.setItem(products[i]["product_id"], count);
          //   window.localStorage.getItem(products[i]["product_id"]);
          //   console.log(window.localStorage);
        }

        //window.localStorage.getItem(products[i]["product_id"]);

        console.log(event.target.textContent);

        //console.log(productQuantityDiv[i].childNodes[1].childNodes[3]);

        console.log(countEl);
        console.log(event.target.textContent);

        if (event.target.textContent === "+") {
          //event.target.addEventListener("click", function () {
          console.log(event.target.textContent);

          count++;
          console.log(count);
          console.log(cartItemsCount);
          cartItemsCount++;
          productQuantityDiv[i].childNodes[1].childNodes[3].textContent = count;
          //console.log(countEl.textContent)
          cartItemsValue += parseInt(products[i]["product__newPrice"]);
          myCartItems.innerHTML = `
                  <div>${cartItemsCount} items</div>
                  <div><span>&#8377;</span>${cartItemsValue}</div>
                  `;
          products[i]["count"] = count;

          // });
        } else if (event.target.textContent === "-") {
          //event.target.addEventListener("click", function () {
          if (count > 0) {
            count--;
            console.log(count);
            console.log(cartItemsCount);
            productQuantityDiv[i].childNodes[1].childNodes[3].textContent =
              count;
            cartItemsCount--;
            cartItemsValue -= parseInt(products[i]["product__newPrice"]);

            myCartItems.innerHTML = `
                          <div>${cartItemsCount} items</div>
                          <div><span>&#8377;</span>${cartItemsValue}</div>
                          `;

            products[i]["count"] = count;
          }
          //});
        }

        if (count === 0) {
          productQuantityDiv[i].childNodes[1].style = "display:none";
          productQuantityDiv[i].childNodes[0].style = "display:block";
        }

        products[i]["count"] = count;
        cartData.set(k + i, products[i]);

        this.setCartData();

        //console.log(cartData);
        //console.log(products[i]);

        //this.setCartData();
        //cartModel.setData(cartData);
        /*
        const countEl = document.getElementById(`count_${i}`);
        const incrementEl = document.getElementById(`increment_${i}`);
        const decrementEl = document.getElementById(`decrement_${i}`);

        incrementEl.addEventListener("click", function () {
          count++;
          cartItemsCount++;
          countEl.textContent = count;
          //console.log(countEl.textContent)
          cartItemsValue += parseInt(products[i]["product__newPrice"]);
          myCartItems.innerHTML = `
                <div>${cartItemsCount} items</div>
                <div><span>&#8377;</span>${cartItemsValue}</div>
                `;
          products[i]["count"] = count;
        });

        decrementEl.addEventListener("click", function () {
          if (count > 0) {
            count--;
            countEl.textContent = count;
            cartItemsCount--;
            cartItemsValue -= parseInt(products[i]["product__newPrice"]);

            myCartItems.innerHTML = `
                    <div>${cartItemsCount} items</div>
                    <div><span>&#8377;</span>${cartItemsValue}</div>
                    `;

            products[i]["count"] = count;
          }
        });

        // if (count === 0) {
        //   productQuantityDiv[i].innerHTML = `
        //       <button class='btn-add'>ADD</button>`;
        // }
        products[i]["count"] = count;

        */
      });
    }

    // this.setCartData();
  },
};

export default productController;
