import React, { useState, useEffect } from "react";
import data from "./Books.json";
import Book from "./Book";
const Shop = () => {
  console.log(data);
  const [books, setBooks] = useState({
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
  const onChange = (e) => {
    console.log(e.target.name, e.target.checked);
    setBooks();
  };
  useEffect(() => {}, []);
  console.log(books);
  const booksArray = data.map((book) => {
    return (
      <Book
        data={book}
        paper={book.id["paper"]}
        onChange={onChange}
        key={book.id}
      />
    );
  });
  return <div>{booksArray}</div>;
};
export default Shop;
