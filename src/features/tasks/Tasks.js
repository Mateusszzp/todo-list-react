import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { useTasks } from "../../useTasks"


function Tasks() {

  //const { tasks } = useSelector(selectTasks);

  const {
    //tasks,
    //removeTask,
    //addNewTask,
    //toggleTaskDone,
    setAllDone,
  } = useTasks()

  return (
    <>
      <Header title="Lista Zadań" />
      <Section title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <TasksList
            
          />}
        exstraHeaderContent={
          <Buttons
            setAllDone={setAllDone}
          />
        }
      />
    </>
  );
}
export default Tasks;
