import { useSelector } from 'react-redux'
import TodoListItem from "./TodoListItem"
import NewTodoForm from "./NewTodoForm"

export default function TodoList() {
    const todosAreLoading = useSelector(state => !state.loading.value.completed);
    const todos = useSelector(state => state.todos.value);
    
    return (
        <>
            <h1>My Todos</h1>
            <NewTodoForm />
            {todosAreLoading
                ? <p>Loading...</p>
                : (
                    <>
                        <h3>Completed:</h3>
                        {todos.map((todo) => {
                            if (todo.isCompleted) return <TodoListItem todo={todo} key={todo.id} />
                        })}

                        <h3>Incomplete:</h3>
                        {todos.map((todo) => {
                            if (!todo.isCompleted) return <TodoListItem todo={todo} key={todo.id} />
                        })}
                    </>
                )}
        </>
    )
}