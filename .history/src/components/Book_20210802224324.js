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
            name={`${props.data.id}.paper`}
            type="checkbox"
            value={props.paper}
            onChange={props.onChange}
          />
        </label>

        <label className="submit">
          <i className="fas fa-cart-plus"></i>
          <input
            name={`${props.data.id}.checkout`}
            value={props.data.checkout}
          />
        </label>
        <label className="reset">
          <i className="fas fa-cart-arrow-down"></i>
          <input
            name={`${props.data.id}.checkout`}
            value={!props.data.checkout}
          />
        </label>
      </div>
    </form>
  );
};
export default Book;
