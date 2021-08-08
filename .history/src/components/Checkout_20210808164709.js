import React from "react";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Checkout = () => {
  const { cart } = useGlobalContext();
  console.log(cart);
  const history = useHistory();
  const checkoutItems = cart
    .filter((item) => {
      const { checkout } = item;
      if (checkout) {
        return item;
      }
      return false;
    })
    .map((item) => {
      const { image, name, id, checkout, price, identifier, paper } = item;
      if (checkout) {
        return (
          <div key={id}>
            <img src={image} alt={identifier} />
            <h3>{name}</h3>
            <h4>Price : ${price}</h4>
            <p>Paperback:{paper ? "Yes" : "No"}</p>
          </div>
        );
      }
      return false;
    });
  return (
    <div className="confirm">
      {checkoutItems}
      <button
        onClick={(e) =>
          setTimeout(() => {
            history.push("/buy");
          }, 2000)
        }
      >
        Confirm and Buy
      </button>
    </div>
  );
};
export default Checkout;