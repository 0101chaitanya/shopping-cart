const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CHECKOUT":
      let item = state.data.filter((item) => {
        if (item.id === action.payload.id) {
          return item;
        }
        return false;
      });

    case "COMPUTE-TOTAL":
      return { ...state, total: state.cart.length };
    default:
      throw new Error(`no matching action found for ${action.type}`);
  }
};
export default reducer;
