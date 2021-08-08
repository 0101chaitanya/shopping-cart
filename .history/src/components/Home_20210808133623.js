import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./Context";
import Book from "./Book";
const Home = (props) => {
  const { cart } = useGlobalContext();

  const booksArray = books.map((item) => {
    return <Book key={item.id} {...item} />;
  });
  return <div className="bookShow">{booksArray}</div>;
};

export default Home;
