import React, { createContext, useContext, useReducer } from "react";
import reducer from "./Reducer";

const initialState = {};

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
    <myContext.Provider value={{ ...state }}>{children}</myContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(myContext);
};

export { myContext, useGlobalContext, ContextWrapper };
