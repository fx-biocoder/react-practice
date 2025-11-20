import { useState } from 'react';

export default function NewTodoForm({ onCreateClicked }) {
    const [inputText, setInputText] = useState('');

    return (
        <>
            <input 
                type="text"
                value={inputText}
                onChange={event => setInputText(event.target.value)}
            />
            <button onClick={() => {
                onCreateClicked(inputText);
                setInputText('');
            }}>Create Todo</button>
        </>
    )
}