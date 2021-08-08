import React, { createContext, useContext, useReducer } from "react";
import reducer from "./Reducer";

const initialState = {};

const myContext = createContext();

const ContextWrapper = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
};
