import React from "react";
import { useGlobalContext } from "./Context";

const Checkout = () => {
  const data = useGlobalContext();
  console.log(data);

  return <div>hi checkout here</div>;
};
export default Checkout;
