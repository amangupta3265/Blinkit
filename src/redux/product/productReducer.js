import { addItemInCart } from "../cart/cartActions";
import { incrementCount } from "./productActions";
import data from "../../json/data.json";

import {
  CHANGE_CATEGORY,
  CHANGE_PRODUCT_CATEGORY,
  DECREMENT_COUNT,
  DISPLAY_COUNTER,
  INCREMENT_COUNT,
} from "./productTypes";

const productState = {
  data: data,
  categorie: "Vegetables & fruits",
  productCategorie: "All",
  product: data["Vegetables & fruits"][0]["products"],
  id: 0,
  count: 0,
  showCounter: false,
};

const productReducer = (state = productState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT: {
      const { data } = state;
      const { categorie, id, productCategorieId } = action.payload;

      const newData = {
        ...data,
        [categorie]: {
          ...data[categorie],
          [productCategorieId]: {
            ...data[categorie][productCategorieId],
            products: data[categorie][productCategorieId].products.map(
              (product, index) =>
                index === id
                  ? {
                      ...product,
                      count: parseInt(product.count) + 1,
                    }
                  : product
            ),
          },
        },
      };

      if (newData === state) {
        console.log("true");
      } else {
        console.log("false");
      }

      console.log("INCREMENT_COUNT", newData);
      console.log("INCREMENT_COUNT", state.data);

      return {
        ...state,
        count: state.count + 1,
        data: {
          ...data,
          [categorie]: {
            ...data[categorie],
            [productCategorieId]: {
              ...data[categorie][productCategorieId],
              products: data[categorie][productCategorieId].products.map(
                (product, index) =>
                  index === id
                    ? {
                        ...product,
                        count: parseInt(product.count) + 1,
                      }
                    : product
              ),
            },
          },
        },
      };
    }

    case DECREMENT_COUNT: {
      //console.log(data);
      let newData = state.data;
      let categorie = action.payload.categorie;
      let id = action.payload.id;
      let productCategorieId = action.payload.productCategorieId;

      console.log(
        "product count",
        newData[categorie][productCategorieId]["products"]
      );
      let count =
        parseInt(
          newData[categorie][productCategorieId]["products"][id]["count"]
        ) - 1;
      newData[categorie][productCategorieId]["products"][id]["count"] = count;

      console.log("DECREMENT_COUNT", count);
      return {
        ...state,
        count: parseInt(state.count) - 1,
        data: newData,
      };
    }

    case DISPLAY_COUNTER: {
      //dispatch(incrementCount())
      return {
        ...state,
        showCounter: true,
      };
    }

    case CHANGE_CATEGORY: {
      return {
        ...state,
        categorie: action.categorie,
      };
    }

    case CHANGE_PRODUCT_CATEGORY: {
      console.log("id", action.id);
      return {
        ...state,
        productCategorie: action.productCategorie,
        id: action.id,
      };
    }

    default:
      return state;
  }
};

export default productReducer;
