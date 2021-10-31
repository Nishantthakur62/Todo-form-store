import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const TodoList = () => {
  const { todos } = useContext(GlobalContext);

  console.log(todos);

  return (
    <div className="Todo">
      <h3>User One </h3>
      <div className="Buttons">
        <button className="Edit">Edit</button>
        <button className="Delete">Delete</button>
      </div>
    </div>
  );
};

export default TodoList;
