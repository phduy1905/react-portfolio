const app_reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_NAV":
      return { ...state, isNavOpen: true };

    case "CLOSE_NAV":
      return { ...state, isNavOpen: false };

    default:
      return state;
  }
};
export default app_reducer;
