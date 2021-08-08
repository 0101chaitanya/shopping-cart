import React, { useState, useEffect } from "react";

const Book = (props) => {
  return (
    <form className="Book">
      <img src={props.data.image} alt={props.data.identifier} />
      <h3>{props.data.name}</h3>
      <div>
        <label>
          Choose Edition: (Defaults to digital edition if unchecked)
          <input
            name={props.data.id.paper}
            type="checkbox"
            value={props.data.paper}
            onChange={props.onChange}
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
