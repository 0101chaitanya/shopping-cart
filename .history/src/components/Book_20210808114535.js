import React, { useState, useEffect } from "react";

const Book = (props) => {
  return (
    <form className="Book">
      <img src={props.image} alt={props.identifier} />
      <h3>{props.name}</h3>
      <div>
        <label>
          Paperback:
          <input
            name={`${props.data.id}.paper`}
            type="checkbox"
            onChange={props.onChange}
          />
        </label>

        <label className="submit">
          <i className="fas fa-cart-plus"></i>
          <input
            name={`${props.data.id}.checkout`}
            type="radio"
            onChange={props.onChange}
            data-value={1}
          />
        </label>
        <label className="reset">
          <i className="fas fa-cart-arrow-down"></i>
          <input
            name={`${props.data.id}.checkout`}
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
