import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState({
    loader: true,
    name: "dasdsa",
    email: "test@gmail.com",
    password: "123456",
  });
  return (
    <StateContext.Provider value={{ state, setState }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
