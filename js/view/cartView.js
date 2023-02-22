import cartController from "../controller/cartController.js";

let cartView = {
  render: function () {
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

    cartController.eventListner(mrpPrice, actualPrice, totalCount);

    this.checkoutPriceDisplay(
      mrpPrice,
      actualPrice,
      totalCount,
      dileveryCharge
    );
  },

  checkoutPriceDisplay: function (
    mrpPrice,
    actualPrice,
    totalCount,
    dileveryCharge
  ) {
    let productsSection__heading = document.querySelector(
      ".productsSection__heading"
    );

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
  },
};

export default cartView;
