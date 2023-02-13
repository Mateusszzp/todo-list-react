import { takeEvery, takeLatest, call, put, select, delay } from 'redux-saga/effects';
import { getExampleTasks } from './getExampleTasks';
import { fetchExampleTasks, setTasks, selectTasks } from './tasksSlice';
import { saveTasksInLocalStorage } from "./tasksLocalStorage"
function* fetchExampleTasksHandler() {
    try {
        yield delay(2000)
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) { yield put(error) }
};
function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks)
};
export function* tasksSaga() {
    console.log("saga jest podłączona")
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler)
};