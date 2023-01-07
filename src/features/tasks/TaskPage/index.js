import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";
import Header from "../../../common/Header";
import Section from "../../../common/Section";



function TaskPage() {
	const { id } = useParams()
	const task = useSelector(state => getTaskById(state, id));
	return (
		<>
			<Header title="Szczegóły zadania " />
			<Section
				title={task ? task.content : "Nie znaleziono zadania 😢"}
				body={<>
					<strong>
						Ukończono:</strong> {task.done ? "TAK" : "NIE"}
					</>} />

		</>
	);
}
export default TaskPage;
