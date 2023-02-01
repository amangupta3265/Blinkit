import produce from "immer";
import lodash from "lodash";

const removeItemInCartProducer = produce((draft, product) => {
  const id = lodash.get(product, "product__id");

  const count = parseInt(draft.cartData.get(id).count);

  if (count === 1) {
    draft.cartData.delete(id);
  } else {
    draft.cartData.get(id).count -= 1;
  }
});

export { removeItemInCartProducer };
