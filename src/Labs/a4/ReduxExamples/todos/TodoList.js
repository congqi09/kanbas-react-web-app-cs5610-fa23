import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
function TodoList() {
    const { todos } = useSelector((state) => state.todosReducer);
    return (
        <div>
            <h2>Todo List</h2>
            <ul className="list-group">
                <TodoForm />
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} />
                ))}
            </ul>
        </div>
    );
}
export default TodoList;