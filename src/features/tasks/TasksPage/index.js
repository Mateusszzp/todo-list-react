import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Search from "./Search";
import { fetchExampleTasks, selectTasksLoading } from "../tasksSlice";
import { Button } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { ThreeDots } from 'react-loading-icons'

const TasksPage = () => {
  const loading = useSelector(selectTasksLoading)
  const dispatch = useDispatch();

  return (
    <>
      <Header title="Lista Zadań" />
      <Section
        button={
          <Button
            onClick={() => dispatch(fetchExampleTasks())}>
            {
              loading
                ? "Pobierz przykładowe zadania"
                : <ThreeDots
                  stroke="teal"
                  strokeOpacity={0.75}
                  strokeWidth={"center"} />
            }
          </Button>}
        title="Dodaj nowe zadanie"
        body={<Form />} />
      <Section
        title="Wyszukiwarka"
        body={<Search />} />
      <Section title="Lista zadań"
        body={<TasksList />}
        exstraHeaderContent={
          <Buttons />} />
    </>
  );
};
export default TasksPage;
