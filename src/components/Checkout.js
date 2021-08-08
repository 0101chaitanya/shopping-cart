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
      const { image, name, id, price, identifier, paper } = item;
      console.log(paper);
      return (
        <div key={id}>
          <img src={image} alt={identifier} />
          <h3>{name}</h3>
          <h4>Price : ${price}</h4>
          <p>Paperback:{paper ? "Yes" : "No"}</p>
        </div>
      );
    });
  return (
    <div className="confirm">
      {checkoutItems}
      <button
        disabled={checkoutItems.length > 0 ? false : true}
        onClick={(e) =>
          setTimeout(() => {
            history.push("/buy");
          }, 1000)
        }
      >
        Confirm and Buy
      </button>
    </div>
  );
};
export default Checkout;
