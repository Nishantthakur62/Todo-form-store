import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ open, onCloseModal }) => {
  const [data, setData] = useState("");

  const { addTodo } = useContext(GlobalContext);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.length) return;

    let newTodo = {
      id: uuidv4(),
      name: data,
    };
    addTodo(newTodo);

    setData("");
  };

  return (
    <Modal open={open} onClose={onCloseModal} center>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todoform"
          placeholder="Please enter your todo"
          style={{ height: "60px", fontSize: "25px" }}
          value={data}
          onChange={handleChange}
        />
      </form>
    </Modal>
  );
};

export default TodoForm;
