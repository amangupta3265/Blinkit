import CheckoutProduct from "../molecules/checkoutProduct/CheckoutProduct";
import lodash from "lodash";

function getCheckoutProducts(cartData) {
  const checkoutProducts = [];

  lodash.forEach([...cartData], (value) => {
    const productObj = value[1];
    checkoutProducts.push(
      <CheckoutProduct
        key={value[0]}
        product={productObj.product}
        cartData={cartData}
      />
    );
  });

  return checkoutProducts;
}

export { getCheckoutProducts };
