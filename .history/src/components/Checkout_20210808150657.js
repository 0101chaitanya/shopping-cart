import React from "react";
import { useGlobalContext } from "./Context";

const Checkout = () => {
  const { cart } = useGlobalContext();
  console.log(cart);

  return <div>hi checkout here</div>;
};
export default Checkout;
