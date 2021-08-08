import React from "react";
import { useGlobalContext } from "./Context";
import Book from "./Book";
const Home = (props) => {
  const { cart } = useGlobalContext();

  const booksArray = cart.map((item) => {
    return <Book key={item.id} {...item} />;
  });
  return (
    <div>
      <div className="bookShow">{booksArray}</div>
    </div>
  );
};

export default Home;
