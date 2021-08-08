const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_PAPER":
      const cart_SET_PAPER = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, paper: action.payload.paper };
        }
        return item;
      });
      return { ...state, cart: cart_SET_PAPER };

    case "TOGGLE-CHECKOUT":
      const cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          console.log(action.payload.checkout, item.id, action.payload.id);
          return { ...item, checkout: action.payload.checkout };
        }
        return item;
      });
      return { ...state, cart: [...cart] };

    case "COMPUTE-TOTAL":
      let count = cart.filter((item) => {
        return item.checkout ? true : false;
      });
      return { ...state, total: count };
    default:
      throw new Error(`no matching action found for ${action.type}`);
  }
};
export default reducer;
