import React from "react";
import "../Components/Styles/Todo.css";
import crossIcon from "../Assets/images/icon-cross.svg";
import checkImg from "../Assets/images/icon-check.svg";

const Todo = ({ text, todo, todos, setTodos, toggled }) => {
  const deleteHandler = () => {
    // console.log('delete');
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className={`list-div transition ${toggled ? "moon-mode" : ""}`}>
      <span
        className={`list-check-box ${todo.completed ? "correct" : ""}`}
        onClick={completeHandler}
      >
        <img src={checkImg} alt="check" />
      </span>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}{" "}
        <button className="delete-btn" onClick={deleteHandler}>
          <img src={crossIcon} alt="Delete List" />
        </button>
      </li>
    </div>
  );
};

export default Todo;
