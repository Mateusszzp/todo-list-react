import { takeEvery, takeLatest, call, put, select, delay, debounce, throttle } from 'redux-saga/effects';
import { getExampleTasks } from './getExampleTasks';
import { fetchExampleTasks, setTasks, selectTasks,loadingApi } from './tasksSlice';
import { saveTasksInLocalStorage } from "./tasksLocalStorage"
function* fetchExampleTasksHandler() {
    try {
    yield delay(2000)
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks,console.log("Opóźnienie")));
        console.log(exampleTasks)
    } catch (error) {
        const er = yield put({ type: "ups jakiś błąd z pobieraniem", error })
        console.log(er)
    }
}
function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks)

}

export function* tasksSaga() {
    console.log("saga jest podłączona")
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler)
    
   



}