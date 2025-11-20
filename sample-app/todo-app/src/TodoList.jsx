import TodoListItem from "./TodoListItem"
import NewTodoForm from "./NewTodoForm"

export default function TodoList({ completedTodos, incompleteTodos, onCompletedClicked, onDeleteClicked, onCreateClicked }) {
    return (
        <>
            <h1>My Todos</h1>
            <NewTodoForm onCreateClicked={onCreateClicked} />
            <p>New todo form will go here...</p>

            <h3>Completed:</h3>
            {completedTodos.map((todo, index) => (
                <TodoListItem todo={todo} key={index} onDeleteClicked={onDeleteClicked} />
            ))}
            <h3>Incomplete:</h3>
            {incompleteTodos.map((todo, index) => (
                <TodoListItem todo={todo} key={index} onCompletedClicked={onCompletedClicked} />
            ))}
        </>
    )
}