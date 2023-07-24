import React, { useState } from "react";
import "../Components/Styles/Form.css";

const Form = ({ inputText, setInputText, todos, setTodos, toggled }) => {
  const [error, setError] = useState("");

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();

    // Trim the inputText to remove leading/trailing whitespaces
    const trimmedText = inputText.trim();

    if (trimmedText === "") {
      setError("Please enter a valid todo item.");
      return;
    }

    setTodos([
      ...todos,
      {
        text: trimmedText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);

    setInputText("");
    setError(""); // Clear the error message after a successful submission
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      submitTodoHandler(e);
    }
  };

  return (
    <form>
      <div className="todo-input-div">
        <span className="check-box" onClick={submitTodoHandler}></span>
        <input
          type="text"
          value={inputText}
          onChange={inputTextHandler}
          onKeyDown={handleKeyDown}
          className={`todo-input transition ${
            toggled ? "moon-mode transition" : ""
          }`}
          placeholder="Create a new todo...."
        />
      </div>
      {error && (
        <p className={`error-message transition ${toggled ? "moon-mode" : ""}`}>
          {error}
        </p>
      )}
    </form>
  );
};

export default Form;
