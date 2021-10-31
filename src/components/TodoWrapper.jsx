import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoWrapper = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="TodoWrapper">
      <button
        onClick={onOpenModal}
        style={{
          margin: "auto",
          display: "block",
          padding: "10px 20px",
          border: "none",
          backgroundColor: "cyan",
          cursor: "pointer",
        }}
      >
        Add Todo
      </button>
      <TodoForm open={open} onCloseModal={onCloseModal} />
      <TodoList />
    </div>
  );
};

export default TodoWrapper;
