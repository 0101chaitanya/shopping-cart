import React, { createContext, useContext, useReducer } from "react";
import reducer from "./Reducer";

const initialState = {};

const myContext = createContext();

const ContextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <myContext.Provider value={{ ...state }}>{children}</myContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(myContext);
};

export { myContext, useGlobalContext, ContextWrapper };
