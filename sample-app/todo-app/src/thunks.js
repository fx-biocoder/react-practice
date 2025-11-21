import axios from 'axios';
import { loadingStarted, loadingCompleted, loadingFailed } from './loadingSlice.js';
import { todosUpdated } from './todosSlice.js';

const backend = 'http://127.0.0.1:3000'

export const loadTodos = () => async (dispatch) => {
    dispatch(loadingStarted());
    try {
        //const response = await axios.get('/api/todos');
        const response = await axios.get(`${backend}/api/todos`);
        const todos = response.data;
        dispatch(loadingCompleted(todos));
    } catch (err) {
        loadingFailed(err);
    }
}

export const createTodo = (newTodoText) => async (dispatch, getState) => {
    try {
        const response = await axios.post(`${backend}/api/todos`, { text: newTodoText });
        const newTodo = response.data;
        const updatedTodos = getState().todos.value.concat(newTodo);
        dispatch(todosUpdated(updatedTodos));
    } catch (err) {
        console.err(err);
    }
}

export const deleteTodo = (id) => async (dispatch, getState) => {
    try {
        await axios.delete(`${backend}/api/todos/${id}`);
        const updatedTodos = getState().todos.value.filter(t => t.id !== id);
        dispatch(todosUpdated(updatedTodos));
    } catch (err) {
        console.log(err);
    }
}

export const markTodoAsCompleted = (id) => async (dispatch, getState) => {
    try {
        const response = await axios.put(`${backend}/api/todos/${id}`, { isCompleted: true });
        const updatedTodo = response.data;
        const updatedTodos = getState().todos.value.map(t => t.id === id ? updatedTodo : t);
        dispatch(todosUpdated(updatedTodos));
    } catch (err) {
        console.log(err);
    }
}