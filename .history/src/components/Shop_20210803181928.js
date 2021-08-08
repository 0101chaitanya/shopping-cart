import React, { useState, useEffect } from "react";
import data from "./Books.json";
import Book from "./Book";
const Shop = () => {
  const [book, setBooks] = useState({
    book1: {
      checkout: false,
      paper: true,
    },
    book2: {
      checkout: false,
      paper: false,
    },
    book3: {
      checkout: false,
      paper: false,
    },
    book4: {
      checkout: false,
      paper: false,
    },
    book5: {
      checkout: false,
      paper: false,
    },
    book6: {
      checkout: false,
      paper: false,
    },
    book7: {
      checkout: false,
      paper: false,
    },
    book8: {
      checkout: false,
      paper: false,
    },
    book9: {
      checkout: false,
      paper: false,
    },
    book10: {
      checkout: false,
      paper: false,
    },
  });
  const onChange = (e) => {
    console.log(e.target.name, e.target.checked);
    const { name, dataset, checked } = e.target;
    const [parent, child] = [name.split(".")[0], name.split(".")[1]];
    console.log(parent, child);
    setBooks((book) => ({
      ...book,
      [parent]: {
        ...book[parent],
        [child]: checked, //Boolean(Number(dataset.value)) ?? ,
      },
    }));
  };
  console.log(book);
  const booksArray = data.map((item) => {
    book["parent"] = book[item.id];
    return (
      <Book
        data={item}
        paper={book["parent"].paper}
        checkout={book["parent"].checkout}
        onChange={onChange}
        key={item.id}
      />
    );
  });
  return <div>{booksArray}</div>;
};
export default Shop;
