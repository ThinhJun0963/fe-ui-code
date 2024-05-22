import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

ToDoList.propTypes = {
  todoList: PropTypes.array,
};

ToDoList.defaultPros = {
  todoList: [],
};

function ToDoList({ todoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default ToDoList;
