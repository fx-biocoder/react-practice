import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createTodo } from './thunks.js';

export default function NewTodoForm() {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();

    return (
        <>
            <input 
                type="text"
                value={inputText}
                onChange={event => setInputText(event.target.value)}
            />
            <button onClick={() => {
                dispatch(createTodo(inputText));
                setInputText('');
            }}>Create Todo</button>
        </>
    )
}