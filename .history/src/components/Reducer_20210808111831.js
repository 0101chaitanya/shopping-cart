const reducer = (state, action) => {
  switch (action.type) {
    case "COMPUTE-TOTAL":
      return { ...state, total: state.cart.length };
    default:
      throw new Error(`no matching action found for ${action.type}`);
  }
};
export default reducer;
