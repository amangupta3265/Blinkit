let checkoutPage = (data, categories, addProduct) => {
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

  for (let i = 0; i < categories.length; i++) {
    let productCategories = data[categories[i]];
    let l = productCategories.length;
    for (let j = 0; j < l; j++) {
      let products = productCategories[j]["products"];

      for (let k = 0; k < products.length; k++) {
        let count = parseInt(products[k]["count"]);

        if (count !== 0) {
          totalCount += count;

          actualPrice += count * parseInt(products[k]["product__newPrice"]);
          mrpPrice += count * parseInt(products[k]["product__oldPrice"]);
          productsContainer.innerHTML += `
          <div class="checkout__product flexRow">
          <div class="flexRow">
            <div class="product__image">
              <div class="product__offer">10% OFF</div>
              <img src="${products[k]["product__image"]}" />
            </div>
            <div>
              <div class="product__name">${products[k]["product__name"]}</div>
              <div class="product__weight">${products[k]["product__weight"]}</div>
              <div class="product__details">
                <div class="product__price">
                  <span class="product__newPrice"><span>&#8377;</span>${products[k]["product__newPrice"]}</span>
                  <span class="product__oldPrice"><span>&#8377;</span>${products[k]["product__oldPrice"]}</span>
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

          let myCartItems = document.querySelector(".myCart__items");

          const countEl = document.getElementById(`count_${k}`);
          const incrementEl = document.getElementById(`increment_${k}`);
          const decrementEl = document.getElementById(`decrement_${k}`);

          incrementEl.addEventListener("click", function () {
            count++;
            totalCount++;
            countEl.textContent = count;
            //console.log(countEl.textContent)
            actualPrice += parseInt(products[k]["product__newPrice"]);
            mrpPrice += parseInt(products[k]["product__oldPrice"]);
            myCartItems.innerHTML = `
                <div>${totalCount} items</div>
                <div><span>&#8377;</span>${actualPrice}</div>
                `;
            products[k]["count"] = count;

            checkoutPriceCalculation();
          });

          decrementEl.addEventListener("click", function () {
            if (count > 0) {
              count--;
              countEl.textContent = count;
              totalCount--;
              actualPrice -= parseInt(products[k]["product__newPrice"]);
              mrpPrice -= parseInt(products[k]["product__oldPrice"]);

              myCartItems.innerHTML = `
                    <div>${totalCount} items</div>
                    <div><span>&#8377;</span>${actualPrice}</div>
                    `;

              products[k]["count"] = count;
              console.log(totalCount);
              checkoutPriceCalculation();
              if (totalCount === 0) check();
            }
          });
        }
      }
    }
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
};

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

export default checkoutPage;
