import React, { useContext, useReducer } from "react";
import app_reducer from "../reducer/AppReducer";
const initialState = {
  isNavOpen: false,
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(app_reducer, initialState);

  const openNav = () => {
    dispatch({ type: "OPEN_NAV" });
  };

  const closeNav = () => {
    dispatch({ type: "CLOSE_NAV" });
  };

  return (
    <AppContext.Provider value={{ ...state, openNav, closeNav }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
