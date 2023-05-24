import { ACTION_TYPE } from "../Utils/index";

export const initial = {
  product: [],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SUCCESS:
      return {
        ...state,
        product: action.payload,
      };
    default:
      throw new Error("Error in reducer");
  }
};
