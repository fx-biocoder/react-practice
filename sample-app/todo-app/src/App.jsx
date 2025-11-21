import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTodos } from './thunks.js';
import './App.css';
import TodoList from './TodoList';

export default function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  return (
    <>
      <TodoList />
    </>
  )
}
