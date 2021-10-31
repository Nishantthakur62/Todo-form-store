import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  todos: [],
};

// Created Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //   actions
  const addTodo = (newTodo) => {
    dispatch({
      type: "ADD_TODO", //mandatory
      payload: newTodo,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        addTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
