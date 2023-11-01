import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Classes from '../a3/Classes'
import Styles from "./Classes/Styles";
import ConditionalOutput from "./ConditionalOutput"
import TodoItem from "./todos/TodoItems";
import Todolist from "./todos/TodoList"
import { useSelector } from "react-redux";
function Assignment3() {
  const {todos} = useSelector((state) => state.todosReducer);
    return (
      <div>
        <h1>Assignment 3</h1>
        <TodoItem/>
        <ConditionalOutput/>
        <JavaScript/> 
        <PathParameters/>
        <Classes/>
        <Styles/>
        <Todolist/>
        <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      </div>
    );
  };
  export default Assignment3;