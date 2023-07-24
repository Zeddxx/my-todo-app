import React, { useState, useEffect } from "react";
import Form from "../src/Components/Form";
import TodoList from "../src/Components/TodoList";
import toggleBtnSun from "../src/Assets/images/icon-sun.svg";
import toggleBtnMoon from "../src/Assets/images/icon-moon.svg";
import "../src/App.css";

const App = () => {
  // states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilterTodos] = useState([]);
  const [toggled, isToggled] = useState(false);
  // use Effects
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  useEffect(() => {
    document.body.classList.toggle("moon-mode", toggled);
  }, [toggled]);
  // Functions
  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Active":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };
  return (
    <div
      className={`main-container transition ${
        toggled ? "moon-mode transition" : ""
      }`}
    >
      <div className="todo-div">
        <div className="todo-head-btn">
          <h1>TODO</h1>
          <span
            onClick={() => {
              isToggled(!toggled);
            }}
            className={`toggleBtn ${toggled ? "toggle" : ""}`}
          >
            {toggled ? (
              <img className="moon" src={toggleBtnMoon} alt="Moon" />
            ) : (
              <img className="sun" src={toggleBtnSun} alt="Sun" />
            )}
          </span>
        </div>
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          toggled={toggled}
        />
        <TodoList
          setTodos={setTodos}
          todos={todos}
          setStatus={setStatus}
          filteredTodos={filteredTodos}
          toggled={toggled}
        />
      </div>
    </div>
  );
};

export default App;
