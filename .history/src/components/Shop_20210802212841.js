import React, { useState, useEffect } from "react";
import data from "./Books.json";
import Book from "./Book";
const Shop = () => {
  console.log(data);
  const [items, setItems] = useState({
    Book1: {
      checkout: false,
      paper: false,
    },
    Book2: {
      checkout: false,
      paper: false,
    },
    Book3: {
      checkout: false,
      paper: false,
    },
    Book4: {
      checkout: false,
      paper: false,
    },
    Book5: {
      checkout: false,
      paper: false,
    },
    Book6: {
      checkout: false,
      paper: false,
    },
    Book7: {
      checkout: false,
      paper: false,
    },
    Book8: {
      checkout: false,
      paper: false,
    },
    Book9: {
      checkout: false,
      paper: false,
    },
    Book10: {
      checkout: false,
      paper: false,
    },
  });
  useEffect(() => {}, []);
  console.log(items);
  const books = data.map((book) => {
    return <Book data={book} key={book.id} />;
  });
  return <div>{books}</div>;
};
export default Shop;
