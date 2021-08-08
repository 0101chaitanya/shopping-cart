import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./Context";
import Book from "./Book";
const Home = (props) => {
  const { books } = useGlobalContext();

  const booksArray = books.map((item) => {
    return <Book {...item} />;
  });
  return <div className="bookShow">{booksArray}</div>;
};

export default Home;
