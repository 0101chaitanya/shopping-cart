import React, { useState, useEffect } from "react";

const Book = (props) => {
  console.log(props.data.digital);
  return (
    <form className="Book">
      <img src={props.data.image} alt={props.data.identifier} />
      <h3>{props.data.name}</h3>
      <div>
        <label>
          Choose Edition (Defaults to digital if unchecked)
          <input
            name={props.data.id}
            type="checkbox"
            value={props.data.paper}
          />
        </label>

        <button type="submit">
          <i className="fas fa-cart-plus"></i>
        </button>
        <button type="reset">
          <i className="fas fa-cart-arrow-down"></i>
        </button>
      </div>
    </form>
  );
};
export default Book;
