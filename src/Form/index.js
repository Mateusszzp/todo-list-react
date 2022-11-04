import React, { useState, useRef } from "react";
import { Forms, Input, Button } from "./styled"

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
    <Forms onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        placeholder="Co jest do zrobienia?"
      />
      <Button
        onClick={setInputFocus}
      >Dodaj zadanie
      </Button>
    </Forms>
  )
};

export default Form;