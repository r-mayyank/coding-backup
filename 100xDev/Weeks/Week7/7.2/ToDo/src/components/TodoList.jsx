import { useRecoilValue } from "recoil";
import { todoFilter } from "../store/atoms/filterSelector";

export const TodoList = () => {
    const todoList = useRecoilValue(todoFilter);

    if (!Array.isArray(todoList)) {
      return <div>No todos available</div>;
    }

    return (
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </li>
        ))}
      </ul>
    );
  };