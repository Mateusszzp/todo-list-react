import { createSlice } from '@reduxjs/toolkit';


const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        toggleHideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
            console.log(tasks)
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload)
            state.tasks[index].done = !state.tasks[index].done;
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload)
            state.tasks.splice(index, 1)
            console.log(index)
        },
        setAllDone: (state, action) => {
           const index =  state.tasks.every(task => task.done !== true)
           
            console.log(index)
        }
    },

});


export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;