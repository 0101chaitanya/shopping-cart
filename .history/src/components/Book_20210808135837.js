import React from "react";
import { useGlobalContext } from "./Context";

const Book = ({ id, name, image, price, identifier, checkout, paper }) => {
  const { togglePaper, toggleCheckout } = useGlobalContext();
  return (
    <form className="Book">
      <img src={image} alt={identifier} />
      <h3>{name}</h3>
      <h4>${price}</h4>
      <label>
        Paperback:
        <input
          name={`${id}.paper`}
          type="checkbox"
          onChange={(e) => {
            const { checked } = e.target.checked;
            togglePaper({ id, paper: checked });
          }}
          checked={paper}
        />
      </label>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          toggleCheckout({ id, checkout: true });
        }}
        disabled={checkout}
      >
        Add to cart
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          toggleCheckout({ id, checkout: false });
        }}
        disabled={!checkout}
      >
        Remove from cart
      </button>
    </form>
  );
};
export default Book;
