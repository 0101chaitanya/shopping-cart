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
        {!checkout && (
          <label className="submit">
            <p className="cart-plus">Add to cart</p>
            <input
              name={`${id}.checkout`}
              type="radio"
              onChange={(e) => {
                const { checked } = e.target;
                toggleCheckout({ id, checkout: true });
              }}
              checked={checkout}
            />
          </label>
        )}
        {checkout && (
          <label className="reset">
            <p className="cart-plus">Remove from cart</p>

            <input
              name={`${id}.checkout`}
              type="radio"
              onChange={(e) => {
                const { checked } = e.target;
                toggleCheckout({ id, checkout: !false });
              }}
              checked={!checkout}
            />
          </label>
        )}
      </div>
    </form>
  );
};
export default Book;
