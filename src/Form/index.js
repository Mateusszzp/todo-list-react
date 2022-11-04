import "./style.css";
import React, { useState, useRef } from "react";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const setInputFocus = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimednewTaskContent = newTaskContent.trim();

    if (!trimednewTaskContent) {
      return;
    }
    addNewTask(trimednewTaskContent);
    setNewTaskContent("");

  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        ref={inputRef}
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        className="form__input"
        placeholder="Co jest do zrobienia?"
      />
      <button onClick={setInputFocus}
        className="form__button">Dodaj zadanie
      </button>
    </form>
  )
};

export default Form;