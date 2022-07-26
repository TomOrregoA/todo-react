import React from "react";
import { TodoContext } from "../TodoContext/index.js";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    
    if(newTodoValue !== ''){
      addTodo(newTodoValue);
      onCancel();
    }
  };
  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <label>Add a new TODO</label>
      <textarea
        className="error"
        value={newTodoValue}
        placeholder="Write in here."
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--error">
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
