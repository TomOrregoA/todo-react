import React from "react";
import { TodoContext } from "../components/TodoContext/index.js";
import { TodoTile } from "../components/TodoTitle/index.js";
import { TodoCounter } from "../components/TodoCounter/index.js";
import { TodoSearch } from "../components/TodoSearch/index.js";
import { TodoList } from "../components/TodoList/index.js";
import { TodoItem } from "../components/TodoItem/index.js";
import { CreateTodoButton } from "../components/CreateTodoButton/index.js";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm/index.js";
import { TodosError } from "../components/TodosError/index.js";
import { TodosLoading } from "../components/TodosLoading/index.js";
import { TodosEmpty } from "../components/TodosEmpty/index.js";


function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoTile />
      <TodoSearch />
      <TodoCounter />
      <TodoList>
        {error && <TodosError/>}
        {loading && <TodosLoading/>}
        {!loading && !searchedTodos.length && <TodosEmpty/>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      <CreateTodoButton 
       setOpenModal={setOpenModal}
      />
    </>
  );
}

export { AppUI };
