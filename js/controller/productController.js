import productModel from "../model/productModel.js";
import productView from "../view/productView.js";

const productController = {
  init: (data) => {
    //console.log("from product ", data);
    productModel.setData(data);
    productView.render();
  },

  getData: function () {
    return productModel.productData;
  },

  eventListeners: function (products) {
    let cartItemsCount = 0;
    let cartItemsValue = 0;
    let productQuantityDiv = document.querySelectorAll(".product__quantity");

    let myCartItems = document.querySelector(".myCart__items");

    for (let i = 0; i < productQuantityDiv.length; i++) {
      let count = 0;

      count = parseInt(products[i]["count"]);

      if (count !== 0) {
        productQuantityDiv[i].innerHTML = `
                <button class='btn-number' >
                <span class="decrementQuantity" id="decrement_${i}">-</span>
                <span id="count_${i}">${count}</span>
                <span class="incrementQuantity" id="increment_${i}">+</span>
                </button>
          `;
      }

      productQuantityDiv[i].addEventListener("click", function (event) {
        if (productQuantityDiv[i].firstChild.textContent === "ADD") {
          count = 1;
          cartItemsCount += count;
          cartItemsValue += parseInt(products[i]["product__newPrice"]);

          myCartItems.innerHTML = `
              <div>${cartItemsCount} items</div>
              <div><span>&#8377;</span>${cartItemsValue}</div>
              `;
        }

        productQuantityDiv[i].innerHTML = `
        <button class='btn-number' >
        <span class="decrementQuantity" id="decrement_${i}">-</span>
        <span id="count_${i}">${count}</span>
        <span class="incrementQuantity" id="increment_${i}">+</span>
        </button>
  `;

        const countEl = document.getElementById(`count_${i}`);
        const incrementEl = document.getElementById(`increment_${i}`);
        const decrementEl = document.getElementById(`decrement_${i}`);

        increament: incrementEl.addEventListener("click", function () {
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
      });
    }
  },
};

export default productController;
