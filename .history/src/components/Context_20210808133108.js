import React, { createContext, useEffect, useContext, useReducer } from "react";
import reducer from "./Reducer";
import data from "./Books.json";
const initialState = {
  cart: data,

  total: 0,
};

const myContext = createContext();

const ContextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setPaper = ({ id, paper }) => {
    dispatch({ type: "SET_PAPER", payload: { id, paper } });
  };
  const AddToCart = ({ id }) => {
    dispatch({ type: "ADD-TO-CART", payload: { id } });
  };
  const RemoveFromCart = ({ id }) => {
    dispatch({ type: "REMOVE-FROM-CART", payload: { id } });
  };

  useEffect(() => {
    computeTotal();
  }, [state.cart]);
  const computeTotal = () => {
    dispatch({ type: "COMPUTE-TOTAL" });
  };
  console.log(state);
  return (
    <myContext.Provider value={{ ...state, setPaper, setCheckout }}>
      {children}
    </myContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(myContext);
};

export { useGlobalContext, ContextWrapper };
