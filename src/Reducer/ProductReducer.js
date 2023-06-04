import { ACTION_TYPE } from "../Utils/index";

export const initial = {
  product: [],
  cart: [],
  wishlist: [],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SUCCESS:
      return {
        ...state,
        product: action.payload,
      };
    case ACTION_TYPE.ADD_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case ACTION_TYPE.REMOVE_FROM_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case ACTION_TYPE.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };
    case ACTION_TYPE.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };
    default:
      throw new Error("Error in reducer");
  }
};
