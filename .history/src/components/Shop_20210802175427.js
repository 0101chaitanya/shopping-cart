import React, { useState, useEffect } from "react";

const Shop = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("https://openlibrary.org/works/OL8383186W.json", {
      mode: "cors",
      "Access-Control-Allow-Origin": "*",
    });
    console.log(data);
    const itemsIFetched = await data.json();
    //"http://covers.openlibrary.org/b/$key/$value-$size.jpg"
    console.log(itemsIFetched);
    setItems(itemsIFetched.data);
  };
  return <div></div>;
  /* http://covers.openlibrary.org/b/$key/$value-$size.jpg  */
};
export default Shop;
