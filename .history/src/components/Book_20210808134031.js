import React from "react";
import { useGlobalContext } from "./Context";

const Book = ({ id, name, image, price, identifier, checkout, paper }) => {
  const { togglePaper, toggleCheckout } = useGlobalContext();

  return (
    <form className="Book">
      <img src={image} alt={identifier} />
      <h3>{name}</h3>
      <h4>P{price}</h4>
      <div>
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
        {
          <button
            onClick={(e) => {
              togglePaper({ id, checkout: true });
            }}
            disabled={checkout}
          >
            Add to cart
          </button>
        }
      </div>
    </form>
  );
};
export default Book;
