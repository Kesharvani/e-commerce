import { useReducer, useEffect, createContext, useContext } from "react";

import { ACTION_TYPE } from "../Utils/index.js";
import { initial, productReducer } from "../Reducer/ProductReducer";
export const productProvider = createContext();
export const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initial);
  const getProduct = async () => {
    try {
      const response = await fetch("/api/products");
      const response2 = await response.json();
      dispatch({ type: ACTION_TYPE.SUCCESS, payload: response2.products });
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
