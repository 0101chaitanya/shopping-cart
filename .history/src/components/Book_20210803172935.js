import React, { useState, useEffect } from "react";

const Book = (props) => {
  const [paper, setPaper] = useState(props.paper);
  const [checkout, setCheckout] = useState(props.checkout);
  useEffect(() => {
    setPaper(props.paper);
    setCheckout(props.checkout);
  }, [props]);
  return (
    <form className="Book">
      <img src={props.data.image} alt={props.data.identifier} />
      <h3>{props.data.name}</h3>
      <div>
        <label>
          Paperback:
          <input
            name={`${props.data.id}.paper`}
            type="checkbox"
            checked={paper}
            onChange={props.onChange}
          />
        </label>

        <label className="submit">
          <i className="fas fa-cart-plus"></i>
          <input
            name={`${props.data.id}.checkout`}
            type="radio"
            checked={checkout}
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
            checked={!checkout}
            onChange={props.onChange}
          />
        </label>
      </div>
    </form>
  );
};
export default Book;
