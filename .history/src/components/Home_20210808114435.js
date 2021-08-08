import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./Context";
import data from "./Books.json";
const Home = (props) => {
  const booksArray = data.map((item) => {
    book["parent"] = book[item.id];
    return <Book />;
  });
  return <div className="bookShow">{booksArray}</div>;
};

export default Home;
