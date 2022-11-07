import React, { useState, useRef } from "react";
import { Forms, Input, Button } from "./styled"

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimednewTaskContent = newTaskContent.trim();

    if (!trimednewTaskContent) {
      return;
    }
    addNewTask(trimednewTaskContent);
    setNewTaskContent("");
    inputRef.current.focus();
};

  return (
    <Forms onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        placeholder="Co jest do zrobienia?"
      />
      <Button>Dodaj zadanie</Button>
    </Forms>
  )
};

export default Form;