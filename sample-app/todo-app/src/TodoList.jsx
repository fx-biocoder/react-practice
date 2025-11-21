import { useSelector } from 'react-redux'
import TodoListItem from "./TodoListItem"
import NewTodoForm from "./NewTodoForm"

export default function TodoList() {
    const todos = useSelector(state => state.todos.value);
    
    return (
        <>
            <h1>My Todos</h1>
            <NewTodoForm />
            <p>New todo form will go here...</p>

            <h3>Completed:</h3>
            {todos.map((todo, index) => {
                if (todo.isCompleted) return <TodoListItem todo={todo} key={index} />
            })}

            <h3>Incomplete:</h3>
            {todos.map((todo, index) => {
                if (!todo.isCompleted) return <TodoListItem todo={todo} key={index} />
            })}
        </>
    )
}