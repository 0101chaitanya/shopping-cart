import React, { createContext, useEffect, useContext, useReducer } from "react";
import reducer from "./Reducer";
import data from "./Books.json";
const initialState = {
  cart: data,

  total: 3,
};

const myContext = createContext();
const ContextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const togglePaper = ({ id, paper }) => {
    console.log(paper);
    dispatch({ type: "TOGGLE_PAPER", payload: { id, paper: paper } });
  };
  const toggleCheckout = ({ id, checkout }) => {
    dispatch({ type: "TOGGLE-CHECKOUT", payload: { id, checkout } });
  };
  const reset = () => {
    dispatch({ type: "RESET", payload: { ...initialState } });
  };

  useEffect(() => {
    computeTotal();
  }, [state.cart]);
  const computeTotal = () => {
    dispatch({ type: "COMPUTE-TOTAL" });
  };
  return (
    <myContext.Provider
      value={{ ...state, togglePaper, toggleCheckout, reset }}
    >
      {children}
    </myContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(myContext);
};

export { useGlobalContext, initialState, ContextWrapper };
