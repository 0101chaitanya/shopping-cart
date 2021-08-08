import React, { useState, useEffect } from "react";
import data from "./Books.json";
import Book from "./Book";
const Shop = () => {
  console.log(data);
  const [items, setItems] = useState({
    Book1: {},
    Book2: {},
    Book3: {},
    Book4: {},
    Book5: {},
    Book6: {},
    Book7: {},
    Book8: {},
    Book9: {},
    Book10: {},
  });
  useEffect(() => {}, []);
  console.log(items);
  const books = data.map((book) => {
    return <Book data={book} key={book.id} />;
  });
  return <div>{books}</div>;
};
export default Shop;
