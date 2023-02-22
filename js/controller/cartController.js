//import productController from "./productController";
import cartModel from "../model/cartModel.js";
import cartView from "../view/cartView.js";

let cartController = {
  init: function (cartData) {
    //console.log("sending cart model", cartData);
    cartModel.setData(cartData);
  },

  getCartData: function () {
    return cartModel.cartData;
  },

  eventListner: (mrpPrice, actualPrice, totalCount, cartData) => {
    let checkout__quantity = document.querySelectorAll(".checkout__quantity");
    console.log(checkout__quantity);

    const myCartItems = document.querySelector(".myCart__items");

    for (let i = 0; i < checkout__quantity.length; i++) {
      const countEl =
        checkout__quantity[i].children[0].getElementsByTagName("span")[1];
      const incrementEl =
        checkout__quantity[i].children[0].getElementsByTagName("span")[2];
      const decrementEl =
        checkout__quantity[i].children[0].getElementsByTagName("span")[0];
      let count = parseInt(
        checkout__quantity[i].children[0].getElementsByTagName("span")[1]
          .textContent
      );

      let productNewPriceDiv = document.querySelectorAll(".product__newPrice");
      let productOldPriceDiv = document.querySelectorAll(".product__oldPrice");

      incrementEl.addEventListener("click", () => {
        count++;
        totalCount++;
        countEl.textContent = count;
        actualPrice += parseInt(productNewPriceDiv[i].children[1].textContent);
        mrpPrice += parseInt(productOldPriceDiv[i].children[1].textContent);
        myCartItems.innerHTML = `
          <div>${totalCount} items</div>
          <div><span>&#8377;</span>${actualPrice}</div>
          `;
        cartView.checkoutPriceDisplay(mrpPrice, actualPrice, totalCount, 10);
      });

      decrementEl.addEventListener("click", function () {
        if (count > 0) {
          count--;
          countEl.textContent = count;
          totalCount--;
          actualPrice -= parseInt(
            productNewPriceDiv[i].children[1].textContent
          );
          mrpPrice -= parseInt(productOldPriceDiv[i].children[1].textContent);

          myCartItems.innerHTML = `
              <div>${totalCount} items</div>
              <div><span>&#8377;</span>${actualPrice}</div>
              `;
          console.log(totalCount);
          cartView.checkoutPriceDisplay(mrpPrice, actualPrice, totalCount, 10);
          if (totalCount === 0) cartController.cleanCart();
        }
      });
    }
  },

  cleanCart: () => {
    let productsContainer = document.querySelector(".checkoutProducts");
    productsContainer.innerHTML = ``;

    let checkoutPrice = document.querySelector(".checkoutPrice");

    checkoutPrice.innerHTML = ``;

    cartController.checkoutPriceCalculation(0, 0, 0, 0);
  },
};

export default cartController;
