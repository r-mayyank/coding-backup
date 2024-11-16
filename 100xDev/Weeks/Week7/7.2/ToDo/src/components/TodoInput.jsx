import { useRecoilValue, useSetRecoilState } from "recoil"
import { useState } from "react"
import { todoListState } from "../store/atoms/todoListState"

export function InputTODO() {
  const setTodos = useSetRecoilState(todoListState)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [todoNo, setTodoNo] = useState(1)

  const handleAddTodo = () => {
    setTodoNo(todoNo + 1);
    setTodos((oldTodoList) => [
      ...oldTodoList,
      { id: todoNo, title, description },
    ]);
    
    setTitle(''); // Clear the input fields after submission
    setDescription('');
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title' />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleAddTodo}>Add Todo</button>

    </div>
  )
}