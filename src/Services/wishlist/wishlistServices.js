import axios from "axios";

import { ACTION_TYPE } from "../../Utils/Constant";
export const addToWishlist = async (token, product, dispatch, toast) => {
  try {
    const {
      data: { wishlist },
      status,
    } = await axios.post(
      "/api/user/wishlist",
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
      toast.success("Added In Wishlist!!");
      dispatch({ type: ACTION_TYPE.ADD_TO_WISHLIST, payload: wishlist });
    }
  } catch (error) {
    toast.error("Something went wrong!!");
    console.error("Error in add to wishlist service", error);
  }
};

export const removeFromWishlist = async (product, token, dispatch, toast) => {
  try {
    const {
      data: { wishlist },
    } = await axios.delete(`/api/user/wishlist/${product._id}`, {
      headers: {
        authorization: token,
      },
    });
    toast.success("Removed from Wishlist!!");
    dispatch({ type: ACTION_TYPE.REMOVE_FROM_WISHLIST, payload: wishlist });
  } catch (error) {
    toast.error("Something went wrong!!");
    console.error("Error in remove wishlist service", error);
  }
};
