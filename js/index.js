import productController from "./controller/productController.js";
console.log("hello");

fetch("./json/data.json")
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);
    productController.init(data);
  });
