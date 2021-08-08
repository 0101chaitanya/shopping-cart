import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./Context";

const Book = ({ id, name, image, price, identifier, checkout, paper }) => {
  const { setPaper } = useGlobalContext();

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
            name={`${props.id}.checkout`}
            type="radio"
            onChange={props.onChange}
            data-value={1}
          />
        </label>
        <label className="reset">
          <i className="fas fa-cart-arrow-down"></i>
          <input
            name={`${props.id}.checkout`}
            type="radio"
            data-value={0}
            onChange={props.onChange}
          />
        </label>
      </div>
    </form>
  );
};
export default Book;
