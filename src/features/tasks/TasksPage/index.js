import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Search from "./Search";


function TasksPage() {

  return (
    <>
      <Header title="Lista Zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />} />

      <Section
        title="Wyszukiwarka"
        body={<Search/>} />

      <Section title="Lista zadań"
        body={<TasksList />}
        exstraHeaderContent={
          <Buttons />} />
    </>
  );
}
export default TasksPage;
