import React, { useState, useRef } from "react";
import { Forms, Input, Button } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimednewTaskContent = newTaskContent.trim();

    dispatch(addTask({
      content: trimednewTaskContent,
      done: false,
      id: nanoid(),
    }));

    if (!trimednewTaskContent) {
      return;
    }
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