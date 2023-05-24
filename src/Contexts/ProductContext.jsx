import { useReducer, useEffect, createContext, useContext } from "react";

import { ACTION_TYPE } from "../Utils/index.js";
import { initial, productReducer } from "../Reducer/ProductReducer";
import { productService } from "../Services/product/productService.js";
export const productProvider = createContext();
export const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initial);
  const getProduct = async () => {
    try {
      const {
        data: { products },
        status,
      } = await productService();
      console.log(products);
      if (status === 200) {
        dispatch({ type: ACTION_TYPE.SUCCESS, payload: products });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <productProvider.Provider value={{ state, dispatch }}>
        {children}
      </productProvider.Provider>
    </div>
  );
};

export const useProduct = () => useContext(productProvider);
