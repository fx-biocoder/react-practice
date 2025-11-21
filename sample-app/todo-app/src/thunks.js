import axios from 'axios';
import { loadingStarted, loadingCompleted, loadingFailed } from './loadingSlice.js';

const backend = 'http://127.0.0.1:3000'

export const loadTodos = () => async (dispatch) => {
    dispatch(loadingStarted());
    try {
        //const response = await axios.get('/api/todos');
        const response = await axios.get(`${backend}/api/todos`);
        const todos = response.data;
        console.log(todos);
        dispatch(loadingCompleted(todos));
    } catch (err) {
        loadingFailed(err);
    }
}