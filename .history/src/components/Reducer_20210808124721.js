const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PAPER":
      const books_SET_PAPER = state.books.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, paper: action.payload.paper };
        }
        return item;
      });
      const cart_SET_PAPER = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, paper: action.payload.paper };
        }
        return item;
      });
      return { ...state, cart: cart_SET_PAPER, books: books_SET_PAPER };

    case "SET_CHECKOUT":
      const books_SET_CHECKOUT = state.books.filter((item) => {
        console.log(action.payload.checkout);

        if (item.id === action.payload.id) {
          console.log(action.payload.checkout);
          return { ...item, checkout: action.payload.checkout };
        }
        return false;
      });
      return { ...state, cart: [...state.cart, ...books_SET_CHECKOUT] };

    case "COMPUTE-TOTAL":
      return { ...state, total: state.cart.length };
    default:
      throw new Error(`no matching action found for ${action.type}`);
  }
};
export default reducer;
