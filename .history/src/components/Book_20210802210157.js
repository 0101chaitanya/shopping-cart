import React, { useState, useEffect } from "react";

const Book = (props) => {
  return (
    <form className="Book">
      <img src={props.data.image} alt={props.data.Identifier} />
      <h3>{props.data.name}</h3>
      <label>
        Digital Edition
        <input name={props.data.id} type="radio" value={props.data.digital} />
      </label>
      <label>
        Paper Edition
        <input name={props.data.id} type="radio" value={props.data.paper} />
      </label>
      <button type="submit"></button>
      <button type="reset"></button>
    </form>
  );
};
export default Book;
