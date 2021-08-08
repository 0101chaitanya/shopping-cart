import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./Context";
import data from "./Books.json";
const Home = (props) => {
  const books = data.map((item) => {
    console.log(item);
  });

  return <div></div>;
};
export default Home;
