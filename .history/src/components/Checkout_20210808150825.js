import React from "react";
import { useGlobalContext } from "./Context";

const Checkout = () => {
  const { cart } = useGlobalContext();
  console.log(cart);
  const checkoutItems = cart.map((item) => {
    return (
      <div>
        <img src={image} alt={identifier} />
        <h3>{name}</h3>
        <h4>${price}</h4>
      </div>
    );
  });
  return <div>hi checkout here</div>;
};
export default Checkout;
