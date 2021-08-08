const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CHECKOUT":
      const item = state.data.filter((item) => {
        if (item.id === action.payload.id) {
          return { ...item, checkout: action.payload.checkout };
        }
        return false;
      });
      return { ...state, cart: [...state.cart, item] };

    case "COMPUTE-TOTAL":
      return { ...state, total: state.cart.length };
    default:
      throw new Error(`no matching action found for ${action.type}`);
  }
};
export default reducer;
