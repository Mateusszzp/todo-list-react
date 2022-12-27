import React, { useState } from 'react'
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import  {useTasks}  from "../../useTasks"

function Tasks() {

  const [hideDone, setHideDone] = useState(false);
  
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };
  const {
    tasks,
    removeTask,
    addNewTask,
    toggleTaskDone,
    setAllDone,
  } = useTasks()

  return (
    <>
      <Header
        title="Lista Zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={<TasksList tasks={tasks}
          hideDone={hideDone}
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone}
        />}
        exstraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </>
  );
}
export default Tasks;
