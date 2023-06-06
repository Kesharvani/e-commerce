import { ACTION_TYPE } from "../Utils/index";

export const initial = {
  product: [],
  cart: [],
  wishlist: [],
  searchTerm: "",
  price: "",
  priceRange: "1000",
  categories: [],
  rating: "",
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
    case ACTION_TYPE.CLEAR_CART:
      return {
        ...state,
        cart: [],
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
    case ACTION_TYPE.SEARCH:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case ACTION_TYPE.HIGH_TO_LOW:
      return {
        ...state,
        price: action.payload,
      };
    case ACTION_TYPE.LOW_TO_HIGH:
      return {
        ...state,
        price: action.payload,
      };
    case ACTION_TYPE.PRICE_RANGE:
      return {
        ...state,
        priceRange: action.payload,
      };
    case ACTION_TYPE.CATEGORY:
      if (state.categories.includes(action.payload)) {
        return {
          ...state,
          categories: state.categories.filter(
            (item) => item !== action.payload
          ),
        };
      } else {
        return {
          ...state,
          categories: [...state.categories, action.payload],
        };
      }
    case ACTION_TYPE.RATING:
      return {
        ...state,
        rating: action.payload,
      };
    case ACTION_TYPE.CLEAR_FILTER:
      return {
        ...state,
        searchTerm: "",
        price: "",
        priceRange: "1000",
        categories: [],
        rating: "",
      };

    default:
      throw new Error("Error in reducer");
  }
};
