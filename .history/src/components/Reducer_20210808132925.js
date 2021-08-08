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
      const books_ADD = state.books.map((item) => {
        if (item.id === action.payload.id) {
          console.log(action.payload.checkout, item.id, action.payload.id);
          return { ...item, checkout: true };
        }
        return item;
      });
      return { ...state, cart: [...books_ADD] };
    case "REMOVE-FROM-CART":
      const books_REMOVE = state.books.map((item) => {
        if (item.id === action.payload.id) {
          console.log(action.payload.checkout, item.id, action.payload.id);
          return { ...item, checkout: false };
        }
        return item;
      });
      return { ...state, cart: [...books_REMOVE] };

    case "COMPUTE-TOTAL":
      return { ...state, total: state.cart.length };
    default:
      throw new Error(`no matching action found for ${action.type}`);
  }
};
export default reducer;
