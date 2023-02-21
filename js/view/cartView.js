import cartController from "../controller/cartController.js";

let cartView = {
  render: () => {
    let cartData = cartController.getCartData();
    // console.log(cartData);
    // console.log(cartData["10"]);

    // cartData.forEach(function (value, key) {
    //   console.log(1);
    //   console.log(key + " = " + value);
    // });

    let productsContainer = document.querySelector(".checkoutProducts");
    productsContainer.innerHTML = ``;
    let productSection = document.querySelector(".products");
    productSection.innerHTML = ``;

    let productsSection__heading = document.querySelector(
      ".productsSection__heading"
    );

    let productCategoriesNavbar = document.querySelector(
      ".productCategoriesNavbar"
    );
    productCategoriesNavbar.innerHTML = ``;

    let mrpPrice = 0;
    let actualPrice = 0;
    let totalCount = 0;
    let dileveryCharge = 10;

    for (let value of cartData.values()) {
      let k = 0;

      let count = parseInt(value["count"]);

      if (count !== 0) {
        totalCount += count;

        actualPrice += count * parseInt(value["product__newPrice"]);
        mrpPrice += count * parseInt(value["product__oldPrice"]);
        productsContainer.innerHTML += `
          <div class="checkout__product flexRow">
          <div class="flexRow">
            <div class="product__image">
              <div class="product__offer">10% OFF</div>
              <img src="${value["product__image"]}" />
            </div>
            <div>
              <div class="product__name">${value["product__name"]}</div>
              <div class="product__weight">${value["product__weight"]}</div>
              <div class="product__details">
                <div class="product__price">
                  <span class="product__newPrice"><span>&#8377;</span><span>${value["product__newPrice"]}</span></span>
                  <span class="product__oldPrice"><span>&#8377;</span><span>${value["product__oldPrice"]}</span></span>
                </div>
              </div>
            </div>
            </div>
            <div class='checkout__quantity'>
            <button style='border-radius: 0.5rem;background-color: #23963f;color:white;padding:1rem 1rem;width:9;margin-right:8rem;border:none'>
            <span style="padding-right:1rem" class="decrementQuantity" id="decrement_${k}">-</span>
            <span id="count_${k}">${count}</span>
            <span style="padding-left:1rem"class="incrementQuantity" id="increment_${k}">+</span>
            </button>
            <div>
            
          </div>
          `;
      }
    }

    let checkout__quantity = document.querySelectorAll(".checkout__quantity");
    console.log(checkout__quantity);

    const myCartItems = document.querySelector(".myCart__items");

    for (let i = 0; i < checkout__quantity.length; i++) {
      //checkout__quantity[i].children[0].getElementsByTagName("span")[0]
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
        //console.log(countEl.textContent)
        //console.log(productNewPriceDiv[i].children[1].textContent);
        actualPrice += parseInt(productNewPriceDiv[i].children[1].textContent);
        mrpPrice += parseInt(productNewPriceDiv[i].children[1].textContent);
        myCartItems.innerHTML = `
          <div>${totalCount} items</div>
          <div><span>&#8377;</span>${actualPrice}</div>
          `;

        //products[k]["count"] = count;

        checkoutPriceCalculation();
      });

      decrementEl.addEventListener("click", function () {
        if (count > 0) {
          count--;
          countEl.textContent = count;
          totalCount--;
          actualPrice += parseInt(
            productNewPriceDiv[i].children[1].textContent
          );
          mrpPrice += parseInt(productNewPriceDiv[i].children[1].textContent);

          myCartItems.innerHTML = `
              <div>${totalCount} items</div>
              <div><span>&#8377;</span>${actualPrice}</div>
              `;

          //products[k]["count"] = count;
          console.log(totalCount);
          checkoutPriceCalculation();
          if (totalCount === 0) check();
        }
      });
    }

    checkoutPriceCalculation();

    function checkoutPriceCalculation() {
      productsSection__heading.innerHTML = `
    <div>
    <p class="placeOrderHeading">Place Order</p>
            <p class="deliveryTime">Delivery in 10 minutes</p>
            <p class="checkoutItems">${totalCount} items</p>
            <div>
        `;

      let checkoutPrice = document.querySelector(".checkoutPrice");

      checkoutPrice.innerHTML = `
    <div class="checkoutPrice">
    <div class="flexRow">
      <p>MRP</p>
      <p>₹${mrpPrice}</p>
    </div>
    <div class="flexRow">
      <p>Product Discount</p>
      <p>₹${mrpPrice - actualPrice}</p>
    </div>
    <div class="flexRow">
      <p>Delivery Charge</p>
      <p>₹${dileveryCharge}</p>
    </div>
    <div class="flexRow">
      <p>Grand Total</p>
      <p>₹${actualPrice + 10}</p>
    </div>
    <div class="flexRow proceedButton">
      <div>
        <span>${totalCount} items =</span>
        <span>₹ ${actualPrice + 10}</span>
      </div>
      <p>Proceed ＞ </p>
    </div>
  </div>
    `;
    }

    function check(totalCount) {
      if (totalCount === 0) {
        let productsContainer = document.querySelector(".checkoutProducts");
        productsContainer.innerHTML = ``;

        let checkoutPrice = document.querySelector(".checkoutPrice");

        checkoutPrice.innerHTML = ``;

        mrpPrice = 0;
        totalCount = 0;
        actualPrice = 0;
        dileveryCharge = 0;

        console.log(totalCount);

        checkoutPriceCalculation();
      }
    }
  },
};

export default cartView;
