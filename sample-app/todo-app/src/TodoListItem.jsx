import { useDispatch } from 'react-redux';
import { markTodoAsCompleted } from "./thunks.js";
import { deleteTodo } from './thunks.js';

export default function TodoListItem({ todo }) {
    const dispatch = useDispatch();
    
    return (
        <>
            <h3>{todo.text}</h3>
            {todo.isCompleted &&  <p>Complete!</p>}
            {todo.isCompleted 
                ? <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete Item</button> 
                : <button onClick={() => dispatch(markTodoAsCompleted(todo.id))}>Mark as Completed</button>
            }
        </>
    )
}