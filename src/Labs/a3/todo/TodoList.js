import TodoItem from "./TodoItem";
import todos from "./todos.json";
const TodoList = () => {
return(
        <>
            <h3>Todo List</h3>
            <ul className="list-group">
                {
                    todos.map((todo, index) => {
                        return(<TodoItem todo={todo} key={index}/>);
                    })
                }
            </ul>
        </>
    );
}
export default TodoList;