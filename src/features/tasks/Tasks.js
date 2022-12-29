import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";



function Tasks() {

  

  return (
    <>
      <Header title="Lista Zadań" />
      <Section title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<TasksList/>}
        exstraHeaderContent={
          <Buttons/>
        }
      />
    </>
  );
}
export default Tasks;
