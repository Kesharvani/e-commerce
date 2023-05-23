export const initial = {
  product: [],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        product: action.payload,
      };
  }
};
