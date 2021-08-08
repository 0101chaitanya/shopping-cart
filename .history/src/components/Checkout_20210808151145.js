import React from "react";
import { useGlobalContext } from "./Context";

const Checkout = () => {
  const { cart } = useGlobalContext();
  console.log(cart);
  const checkoutItems = cart.map((item) => {
    const { image, name, price, identifier, paper } = item;
    return (
      <div>
        <img src={image} alt={identifier} />
        <h3>{name}</h3>
        <h4>Price : ${price}</h4>
        <p>Paperback:{paper ? "Yes" : "No"}</p>
      </div>
    );
  });
  return <div className="confirm">hi checkout here</div>;
};
export default Checkout;
