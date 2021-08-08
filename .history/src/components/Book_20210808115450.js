import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./Context";

const Book = ({ id,name,image,price,identifier,checkout,paper}) => {
  const { }
  return (
    <form className="Book">
      <img src={props.image} alt={props.identifier} />
      <h3>{props.name}</h3>
      <div>
        <label>
          Paperback:
          <input
            name={`${props.id}.paper`}
            type="checkbox"
            onChange={(e) => {
              const{ checked }= e.target.value;
              setCheckBox({id,checked,})
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
