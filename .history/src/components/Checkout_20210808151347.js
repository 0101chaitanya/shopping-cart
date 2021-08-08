import React from "react";
import { useGlobalContext } from "./Context";

const Checkout = () => {
  const { cart } = useGlobalContext();
  console.log(cart);
  const checkoutItems = cart.filter((item) => {
    const { image, name, id, checkout, price, identifier, paper } = item;

    return checkout ? (
      <div key={id}>
        <img src={image} alt={identifier} />
        <h3>{name}</h3>
        <h4>Price : ${price}</h4>
        <p>Paperback:{paper ? "Yes" : "No"}</p>
      </div>
    ) : (
      false
    );
  });
  return <div className="confirm">{checkoutItems}</div>;
};
export default Checkout;
