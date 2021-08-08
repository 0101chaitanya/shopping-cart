const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PAPER":
      const cart_SET_PAPER = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, paper: action.payload.paper };
        }
        return item;
      });
      return { ...state, cart: cart_SET_PAPER };

    case "ADD-TO-CART":
      const books_SET_CHECKOUT = state.books.map((item) => {
        if (item.id === action.payload.id) {
          console.log(action.payload.checkout, item.id, action.payload.id);
          return { ...item, checkout: true };
        }
        return item;
      });
      return { ...state, cart: [...books_SET_CHECKOUT] };

    case "COMPUTE-TOTAL":
      return { ...state, total: state.cart.length };
    default:
      throw new Error(`no matching action found for ${action.type}`);
  }
};
export default reducer;
