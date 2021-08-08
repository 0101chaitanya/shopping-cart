import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./Context";
import data from "./Books.json";
const Home = (props) => {

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
  return <div className="bookShow">{booksArray}</div>;
};

  return <div></div>;
};
export default Home;
