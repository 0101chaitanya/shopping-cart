import React, { useState, useEffect } from "react";

const Shop = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      "https://openlibrary.org/works/OL8383186W/The_Wolf_of_Wall_Street"
    );
    const itemsIFetched = await data.json();
    //"http://covers.openlibrary.org/b/$key/$value-$size.jpg"

    setItems(itemsIFetched.data);
  };
  return (
    <div>
      {items.map((card) => {
        return (
          <h1 key={card.itemId}>
            <Link to={`/shop/${card.itemId}`}>{card.item.name}</Link>
          </h1>
        );
      })}
    </div>
  );
  /* http://covers.openlibrary.org/b/$key/$value-$size.jpg  */
};
export default Shop;
