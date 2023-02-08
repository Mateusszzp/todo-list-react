import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        toggleHideDone: false,
        loading: "none",
    },

    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId)
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId)
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            tasks.forEach((task) => { task.done = true });
        },
        fetchExampleTasks: (tasks) => {
            tasks.loading = false
        },

        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks
            state.loading = true
        },
    }
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    setTasks,
    loading,
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasksLoading = state => selectTasksState(state).loading;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length > 0;
export const selectIsTasksEveryDone = state => selectTasks(state).every(({ done }) => done);
export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);
    
 export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }
    return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
}
export default tasksSlice.reducer;
