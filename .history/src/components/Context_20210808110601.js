import React, { createContext, useContext, useReducer } from "react";
import reducer from "./Reducer";
import data from "./Books.json";
const initialState = {
  cart: data.filter((item) => {
    if (!item.checkout) {
      return false;
    }
    return item;
  }),
  total: 0,
};

const myContext = createContext();

const ContextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: id });
  };
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <myContext.Provider value={{ ...state, addToCart, removeFromCart }}>
      {children}
    </myContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(myContext);
};

export { myContext, useGlobalContext, ContextWrapper };
