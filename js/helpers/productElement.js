let productElement = (singleProduct, id) => {
  let product = document.createElement("div");
  let image__section = document.createElement("div");
  let product__offer = document.createElement("div");
  let product__image = document.createElement("img");
  let product__sourced = document.createElement("div");
  let product__name = document.createElement("div");
  let product__weight = document.createElement("div");
  let product__details = document.createElement("div");
  let product__price = document.createElement("div");
  let product__newPrice = document.createElement("span");
  let product__oldPrice = document.createElement("span");
  let product__quantity = document.createElement("div");
  let product__quantityButton = document.createElement("button");
  let product__quantityButtonCount = document.createElement("button");

  product.className = "products__product";
  image__section.className = "product__image";
  product__offer.className = "product__offer";
  product__sourced.className = "product__sourced";
  product__weight.className = "product__weight";
  product__name.className = "product__name";
  product__weight.className = "product__weight";
  product__details.className = "product__details";
  product__price.className = "product__price";
  product__newPrice.className = "product__newPrice";
  product__oldPrice.className = "product__oldPrice";
  product__quantity.className = "product__quantity";
  product__quantityButtonCount.className = "count__button";

  image__section.appendChild(product__offer);
  image__section.appendChild(product__image);
  image__section.appendChild(product__sourced);

  product__offer.innerText = singleProduct["product__offer"];
  product__image.src = singleProduct["product__image"];
  product__sourced.innerText = singleProduct["product__sourced"];
  product__name.innerText = singleProduct["product__name"];
  product__weight.innerText = singleProduct["product__weight"];
  product__newPrice.innerText = "₹" + singleProduct["product__newPrice"];
  product__oldPrice.innerText = "₹" + singleProduct["product__oldPrice"];
  product__quantityButton.textContent = "ADD";

  product.appendChild(image__section);
  product.appendChild(product__name);
  product.appendChild(product__weight);
  product__price.appendChild(product__newPrice);
  product__price.appendChild(product__oldPrice);
  product__details.appendChild(product__price);

  product__details.appendChild(product__quantity);
  product.appendChild(product__details);
  product__quantity.appendChild(product__quantityButton);

  return product;
};

export default productElement;
