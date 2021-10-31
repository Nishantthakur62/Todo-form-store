import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  todos: [
    { id: 1, name: "netflix" },
    { id: 2, name: "prime videos" },
    { id: 3, name: "coding" },
  ],
};

// Created Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
