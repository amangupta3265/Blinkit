import produce from "immer";
import lodash from "lodash";

const addItemInCartProducer = produce((draft, product) => {
  const id = lodash.get(product, "product__id");

  if (draft.cartData.get(id)) {
    draft.cartData.get(id).count += 1;
  } else {
    draft.cartData.set(id, { product: product, count: 1 });
  }
});

export { addItemInCartProducer };
