import React from "react";
import Todo from "./Todo";
import TodosBtn from "./TodosBtn";
import "../Components/Styles/Todo.css";

const TodoList = ({ todos, setTodos, setStatus, filteredTodos, toggled }) => {
  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearAllHandler = () => {
    setTodos([]);
  };

  return (
    <div className="container">
      <div className="todo-container">
        <div className="todo-list">
          {/* <Todo /> */}
          {filteredTodos.map((todo) => (
            <Todo
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              todo={todo}
              text={todo.text}
              toggled={toggled}
              id={todo.id}
            />
          ))}
          <div
            className={`todo-btns mobile-bottom transition ${
              toggled ? "moon-mode" : ""
            }`}
          >
            <div className="item-left mobileBtn">
              <p>
                {itemsLeft} {itemsLeft === 1 ? "item" : "items"} left
              </p>
            </div>
            <div className="clear-btn btn mobileBtn">
              <p onClick={clearAllHandler}>Clear Completed</p>
            </div>
          </div>
          <TodosBtn
            setStatus={setStatus}
            filteredTodos={filteredTodos}
            setTodos={setTodos}
            todos={todos}
            toggled={toggled}
          />
        </div>
        {/* <TodosBtn  className='mobileBtn'
        setStatus ={setStatus}
        filteredTodos ={filteredTodos}
        setTodos = {setTodos}
        todos = {todos}
        toggled={toggled}
        /> */}
      </div>
    </div>
  );
};

export default TodoList;
