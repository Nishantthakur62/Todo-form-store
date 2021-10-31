import React from "react";

const TodoItem = ({ idx, item }) => {
  return (
    <div className="Todo" key={idx}>
      <h3>{item.name}</h3>
      <div className="Buttons">
        <button className="Edit">Edit</button>
        <button className="Delete">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
