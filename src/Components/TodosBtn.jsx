import React, { useState } from "react";
import "./Styles/Todo.css";

const TodosBtn = ({ setStatus, setTodos, todos, toggled }) => {
  const statusHandler = (text) => {
    setStatus(text);
  };


  const clearCompletedHandler = () => {
    setTodos(todos.filter((todo) => !todo.completed)); // Filter out completed todos and keep only uncompleted ones
  };

  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  const [activeBtn, setActiveBtn] = useState("All"); // Store the active button text, initially set to 'All'

  const handleButtonClick = (text) => {
    setActiveBtn(text);
    statusHandler(text);
  };

  return (
    <div className={`todo-btns transition ${toggled ? "moon-mode" : ""}`}>
      <div className="item-left">
        <p>
          {itemsLeft} {itemsLeft === 1 ? "item" : "items"} left
        </p>
      </div>
      <div className="option-container">
        <span className={`btn ${activeBtn === "All" ? "active" : ""}`}>
          <p
            className={`hover transition ${toggled ? "hoverMoon" : ""}`}
            onClick={() => handleButtonClick("All")}
          >
            All
          </p>
        </span>
        <span className={`btn ${activeBtn === "Active" ? "active" : ""}`}>
          <p
            className={`hover transition ${toggled ? "hoverMoon" : ""}`}
            onClick={() => handleButtonClick("Active")}
          >
            Active
          </p>
        </span>
        <span className={`btn ${activeBtn === "Completed" ? "active" : ""}`}>
          <p
            className={`hover transition ${toggled ? "hoverMoon" : ""}`}
            onClick={() => handleButtonClick("Completed")}
          >
            Completed
          </p>
        </span>
      </div>
      <div className="clear-btn btn">
        <p onClick={clearCompletedHandler}>Clear Completed</p>
      </div>
    </div>
  );
};

export default TodosBtn;
