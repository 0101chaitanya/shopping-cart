import React, { useState, useEffect } from "react";
import data from "./Books.json";
import Book from "./Book";
const Shop = () => {
  console.log(data);
  const [items, setItems] = useState([]);
  useEffect(() => {}, []);
  const books = data.map((book) => {
    console.log(book);
    return true;
  });
  return <div></div>;
};
export default Shop;
