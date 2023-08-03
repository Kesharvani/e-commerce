import {
  useReducer,
  useEffect,
  createContext,
  useContext,
  useState,
} from "react";

import { ACTION_TYPE } from "../Utils/index.js";
import { initial, productReducer } from "../Reducer/ProductReducer";
import { productService } from "../Services/product/productService.js";
import { addressData } from "../Reducer/ProductReducer.js";
export const productProvider = createContext();
export const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initial);
  const [isLoading, setIsLoading] = useState(false);
  const [addAddress, setAddAddress] = useState(addressData);
  const [toggleFilter, setToggleFilter] = useState(false);
  const getProduct = async () => {
    setIsLoading(true);
    try {
      const {
        data: { products },
        status,
      } = await productService();
      if (status === 200) {
        dispatch({ type: ACTION_TYPE.SUCCESS, payload: products });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <productProvider.Provider
        value={{
          state,
          dispatch,
          isLoading,
          setAddAddress,
          addAddress,
          toggleFilter,
          setToggleFilter,
        }}
      >
        {children}
      </productProvider.Provider>
    </div>
  );
};

export const useProduct = () => useContext(productProvider);
