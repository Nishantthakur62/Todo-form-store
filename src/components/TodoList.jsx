import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useContext(GlobalContext);

  return (
    <React.Fragment>
      {!todos.length ? (
        <h1>Sorry, No Todos</h1>
      ) : (
        todos.map((item, idx) => <TodoItem item={item} idx={idx} />)
      )}
    </React.Fragment>
  );
};

export default TodoList;
