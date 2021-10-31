import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const TodoForm = ({ open, onCloseModal }) => {
  const { todos } = useContext(GlobalContext);
  console.log(todos);

  return (
    <Modal open={open} onClose={onCloseModal} center>
      <form>
        <input
          type="text"
          name="todoform"
          placeholder="Please enter your todo"
          style={{ height: "60px", fontSize: "25px" }}
        />
      </form>
    </Modal>
  );
};

export default TodoForm;
