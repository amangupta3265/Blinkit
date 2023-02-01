let cartItemsCount = 0;
let cartItemsValue = 0;

let addProduct = (products) => {
  let productQuantityDiv = document.querySelectorAll(".product__quantity");

  let myCartItems = document.querySelector(".myCart__items");

  for (let i = 0; i < productQuantityDiv.length; i++) {
    let count = 0;

    count = parseInt(products[i]["count"]);

    if (count !== 0) {
      productQuantityDiv[i].innerHTML = `
                    <button style='border-radius: 0.5rem;background-color: #23963f;color:white;padding:1rem 1rem;width:9'>
                    <span style="padding-right:1rem" class="decrementQuantity" id="decrement_${i}">-</span>
                    <span id="count_${i}">${count}</span>
                    <span style="padding-left:1rem"class="incrementQuantity" id="increment_${i}">+</span>
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
      <button style='border-radius: 0.5rem;background-color: #23963f;color:white;padding:1rem 1rem;width:9'>
      <span style="padding-right:1rem" class="decrementQuantity" id="decrement_${i}">-</span>
      <span id="count_${i}">${count}</span>
      <span style="padding-left:1rem"class="incrementQuantity" id="increment_${i}">+</span>
      </button>
  `;

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

      products[i]["count"] = count;
    });
  }
};

export default addProduct;
