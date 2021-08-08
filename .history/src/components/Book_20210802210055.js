import React, { useState, useEffect } from "react";

const Book = (props) => {
  return (
    <form className="Book">
      <img src={props.data.image} alt={props.data.Identifier} />
      <h3>{props.data.name}</h3>
      <label>
        Digital Edition
        <input name={props.id} type="radio" value={props.digital} />
      </label>
      <label>
        Paper Edition
        <input name={props.id} type="radio" value={props.digital} />
      </label>
      <button type="submit"></button>
      <button type="reset"></button>
    </form>
  );
};
export default Book;
