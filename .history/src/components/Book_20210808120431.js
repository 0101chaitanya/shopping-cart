import React from "react";
import { useGlobalContext } from "./Context";

const Book = ({ id, name, image, price, identifier, checkout, paper }) => {
  const { setPaper, setCheckout } = useGlobalContext();

  return (
    <form className="Book">
      <img src={image} alt={identifier} />
      <h3>{name}</h3>
      <div>
        <label>
          Paperback:
          <input
            name={`${id}.paper`}
            type="checkbox"
            onChange={(e) => {
              const { checked } = e.target.value;
              setPaper({ id, checked });
            }}
          />
        </label>

        <label className="submit">
          <i className="fas fa-cart-plus"></i>
          <input
            name={`${id}.checkout`}
            type="radio"
            onChange={(e) => {
              const { checked } = e.target;
              setCheckout({ id, checked });
            }}
            checked={checkout}
          />
        </label>
        <label className="reset">
          <i className="fas fa-cart-arrow-down"></i>
          <input
            name={`${id}.checkout`}
            type="radio"
            onChange={(e) => {
              const { checked } = e.target;
              setCheckout({ id, checked: !checked });
            }}
            checked={!checkout}
          />
        </label>
      </div>
    </form>
  );
};
export default Book;
