import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./Context";
import data from "./Books.json";
import Book from "./Book";
const Home = (props) => {
  const booksArray = data.map((item) => {
    return <Book />;
  });
  return <div className="bookShow">{booksArray}</div>;
};

export default Home;
