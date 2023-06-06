import axios from "axios";

import { ACTION_TYPE } from "../../Utils/Constant";
export const addToCart = async (product, token, dispatch, toast) => {
  try {
    const {
      data: { cart },
      status,
    } = await axios.post(
      "/api/user/cart",
      {
        product,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201) {
      toast.success("Added In Cart!!");
      dispatch({ type: ACTION_TYPE.ADD_TO_CART, payload: cart });
    }
  } catch (error) {
    toast.error("Something Went Wrong !");
    console.error("Error in Add to cart service", error);
  }
};

export const removeFromCart = async (product, token, dispatch, toast) => {
  try {
    const {
      data: { cart },
      status,
    } = await axios.delete(`/api/user/cart/${product._id}`, {
      headers: {
        authorization: token,
      },
    });
    if (status === 200) {
      toast.success("Removed from Cart!!");
      dispatch({ type: ACTION_TYPE.REMOVE_FROM_CART, payload: cart });
    }
  } catch (error) {
    toast.error("Something Went Wrong !");
    console.error("Error in remove from cart", error);
  }
};

export const clearCart = async (cart, token, dispatch) => {
  try {
    for (const item of cart) {
      await axios.delete(`/api/user/cart/${item._id}`, {
        headers: {
          authorization: token,
        },
      });
    }
    dispatch({ type: ACTION_TYPE.CLEAR_CART });
  } catch (error) {
    console.error("Error in clearing the cart service", error);
  }
};

export const updateQuantityFromCart = async (
  id,
  token,
  dispatch,
  actionType
) => {
  try {
    const {
      data: { cart },
      status,
    } = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: actionType === "INCREASE_QTY" ? "increment" : "decrement",
        },
      },
      {
        headers: { authorization: token },
      }
    );
    if (status === 200)
      dispatch({ type: ACTION_TYPE.UPDATE_QTY_CART, payload: cart });
  } catch (error) {
    console.error("Error in updating the cart service", error);
  }
};
