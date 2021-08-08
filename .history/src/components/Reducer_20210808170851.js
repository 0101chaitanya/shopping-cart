const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_PAPER":
      const cart_SET_PAPER = state.cart.map((item) => {
        console.log(action.payload.paper);

        if (item.id === action.payload.id) {
          return { ...item, paper: action.payload.paper };
        }
        return item;
      });
      return { ...state, cart: cart_SET_PAPER };
    case "RESET":
      return { ...action.payload };

    case "TOGGLE-CHECKOUT":
      const cartModified = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, checkout: action.payload.checkout };
        }
        return item;
      });
      return { ...state, cart: [...cartModified] };

    case "COMPUTE-TOTAL":
      let count = state.cart.filter((item) => {
        return item.checkout ? true : false;
      });
      return { ...state, total: count.length };
    default:
      throw new Error(`no matching action found for ${action.type}`);
  }
};
export default reducer;
