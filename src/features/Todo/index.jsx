import React from "react";
import PropTypes from "prop-types";
import ToDoList from "./components/ToDoList";

TodoFeatures.propTypes = {};

function TodoFeatures(props) {
  const todoList = [
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Sleep",
    },
    {
      id: 3,
      title: "Code",
    },
  ];

  return <div>
    <h3>ToDoList</h3>
    <ToDoList todoList={todoList}/>
  </div>;
}

export default TodoFeatures;
