import axios from "axios";

import { ACTION_TYPE } from "../../Utils/Constant";
export const addToWishlist = async (token, product, dispatch) => {
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
    if (status === 200)
      dispatch({ type: ACTION_TYPE.ADD_TO_WISHLIST, payload: wishlist });
  } catch (error) {
    console.error("Error in add to wishlist service", error);
  }
};

export const removeFromWishlist = async (id, token, dispatch) => {
  try {
    const {
      data: { wishlist },
    } = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: ACTION_TYPE.REMOVE_FROM_WISHLIST, payload: wishlist });
  } catch (error) {
    console.error("Error in remove wishlist service", error);
  }
};
