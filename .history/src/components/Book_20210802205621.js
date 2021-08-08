import React, { useState, useEffect } from "react";

const Book = (props) => {
  return (
    <div className="Book">
      <img src={props.data.image} alt={props.data.Identifier} />
      <h3>{props.data.name}</h3>
      <label>
        Digital Edition
        <input name={props.name} type="radio" value={props.digital} />
      </label>
      <label>
        Paper Edition
        <input name={props.name} type="radio" value={props.digital} />
      </label>
    </div>
  );
};
export default Book;
