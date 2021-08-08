import React, { useState, useEffect } from "react";

const Book = (props) => {
  const [paper,setPaper] = useState(props.paper);
  const [checkout,setCheckout] = useState(props.checkout);
  useEffect(() => {
    setPaper(props => ({
      ...props.paper
    })
  },[props])
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
          />
        </label>
        <label className="reset">
          <i className="fas fa-cart-arrow-down"></i>
          <input
            name={`${props.data.id}.checkout`}
            type="radio"
            checked={!checkout}
            onChange={props.onChange}
          />
        </label>
      </div>
    </form>
  );
};
export default Book;
