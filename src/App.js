import React, { useEffect, useState } from 'react'
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";



function App() {
const [data, setData] = useState("")
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    
    ]);

const get_data = JSON.parse(localStorage.getItem("task"))
  useEffect(() => {
setData( tasks !==undefined ) 
{localStorage.setItem("task", JSON.stringify(tasks))}

    
  },[tasks])
  
  console.log(get_data)

const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => task.id === id ?
      { ...task, done: !task.done } : task))
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,

    })))
  }
  
  const addNewTask = (content                 ) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      }
      ]);
    
   
  };
  return (
    <main>
      <Header
        title="Lista Zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks}
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
    </main>
  );
}
export default App;
