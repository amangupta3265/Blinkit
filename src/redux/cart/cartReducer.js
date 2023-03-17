import { ADD_ITEM_IN_CART, REMOVE_ITEM_IN_CART } from "./cartTypes";

const cartState = {
  cartItemsCount: 0,
  cartItemsValue: 0,
  displayCartItems: false,
  cartData: new Map(),
  mrpPrice: 0,
  actualPrice: 0,
  dileveryCharge: 0,
  totalCount: 0,
};

const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_ITEM_IN_CART: {
      let cartData = state.cartData;
      let product = action.payload.product;
      let value = parseInt(action.payload.value);
      console.log("action", action);
      console.log("product from cartReducer", product);
      let id = product["product__id"];
      let productObj = {
        productCategorieId: action.payload.productCategorieId,
        categorie: action.payload.categorie,
        id: action.payload.id,
        product: product,
      };

      cartData.set(id, productObj);

      let cartItemsCount = parseInt(state.cartItemsCount) + value;
      let cartItemsValue = parseInt(state.cartItemsValue) + value;
      let totalCount = state.totalCount + 1;
      let actualPrice =
        parseInt(state.actualPrice) + parseInt(product["product__newPrice"]);
      let mrpPrice =
        parseInt(state.mrpPrice) + parseInt(product["product__oldPrice"]);

      return {
        ...state,
        displayCartItems: true,
        cartItemsCount: cartItemsCount,
        totalCount: totalCount,
        cartItemsValue: cartItemsValue,
        actualPrice: actualPrice,
        mrpPrice: mrpPrice,
        cartData: cartData,
      };
    }

    case REMOVE_ITEM_IN_CART: {
      let cartData = state.cartData;
      let product = action.payload.product;
      let value = parseInt(action.payload.value);
      console.log("action", action);
      console.log("product from cartReducer", product);
      let id = product["product__id"];
      let productObj = {
        productCategorieId: action.payload.productCategorieId,
        categorie: action.payload.categorie,
        id: action.payload.id,
        product: product,
      };

      cartData.set(id, productObj);

      let cartItemsCount = parseInt(state.cartItemsCount) - value;
      let cartItemsValue = parseInt(state.cartItemsValue) - value;
      let totalCount = state.totalCount - 1;
      let actualPrice =
        parseInt(state.actualPrice) - parseInt(product["product__newPrice"]);
      let mrpPrice =
        parseInt(state.mrpPrice) - parseInt(product["product__oldPrice"]);

      let displayCartItems = state.displayCartItems;

      if (parseInt(product["count"]) === 0) {
        console.log("REMOVE_ITEM_IN_CART", product["count"]);
        cartData.delete(id);
      }

      if (cartItemsCount === 0) {
        displayCartItems = false;
      }

      return {
        ...state,
        displayCartItems: displayCartItems,
        cartItemsCount: cartItemsCount,
        totalCount: totalCount,
        cartItemsValue: cartItemsValue,
        actualPrice: actualPrice,
        mrpPrice: mrpPrice,
        cartData: cartData,
      };
    }

    // case REMOVE_ITEM_IN_CART: {
    //   let cartData = state.cartData;
    //   let product = action.payload.product;
    //   let value = parseInt(action.payload.value);
    //   console.log("action", action);
    //   console.log("product from cartReducer", product);
    //   let id = product["product__id"];
    //   cartData.set(id, product);
    //   let cartItemsCount = parseInt(state.cartItemsCount) - value;
    //   let cartItemsValue = parseInt(state.cartItemsValue) - value;
    //   let totalCount = state.totalCount - 1;
    //   let actualPrice =
    //     parseInt(state.actualPrice) - parseInt(product["product__newPrice"]);
    //   let mrpPrice =
    //     parseInt(state.mrpPrice) - parseInt(product["product__oldPrice"]);

    //   let displayCartItems = state.displayCartItems;

    //   if (parseInt(product["count"]) === 0) {
    //     console.log("REMOVE_ITEM_IN_CART", product["count"]);
    //     cartData.delete(id);
    //   }

    //   if (cartItemsCount === 0) {
    //     displayCartItems = false;
    //   }

    //   return {
    //     ...state,
    //     displayCartItems: displayCartItems,
    //     cartItemsCount: cartItemsCount,
    //     totalCount: totalCount,
    //     cartItemsValue: cartItemsValue,
    //     actualPrice: actualPrice,
    //     mrpPrice: mrpPrice,
    //     cartData: cartData,
    //   };
    // }

    default:
      return state;
  }
};

export default cartReducer;

/*
addItemInCart = (itemValue, product) => {
    console.log("item value", itemValue);
    if (!this.state.displayCartItems) {
      this.setState({
        displayCartItems: true,
      });
    }

    let cartData = this.state.cartData;
    let id = product["product__id"];
    cartData.set(id, product);

    //console.log("product in addItemInCart", product);

    this.setState({
      cartItemsCount: parseInt(this.state.cartItemsCount) + 1,
      cartItemsValue: parseInt(this.state.cartItemsValue) + parseInt(itemValue),
      cartData: cartData,
      totalCount: parseInt(this.state.totalCount) + 1,
      actualPrice:
        parseInt(this.state.actualPrice) +
        parseInt(product["product__newPrice"]),
      mrpPrice:
        parseInt(this.state.mrpPrice) + parseInt(product["product__oldPrice"]),
    });
  };
  */
