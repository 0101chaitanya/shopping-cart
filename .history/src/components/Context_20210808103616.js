import React, { useContext, useReducer } from "react";
import reducer from "./Reducer";

const initialState = {};

const myContext = React.createContext();

const ContextWrapper = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
};
