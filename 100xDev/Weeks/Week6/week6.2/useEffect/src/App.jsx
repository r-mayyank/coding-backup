import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [todoId, setTodoId] = useState(1);

  return <div>
    <button onClick={function() {setTodoId(1)}}>1</button>
    <button onClick={function() {setTodoId(2)}}>2</button>
    <button onClick={function() {setTodoId(3)}}>3</button>
    <button onClick={function() {setTodoId(4)}}>4</button>
    <Todo id={todoId} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=${id}")
      .then(response => {
        setTodo(response.data.todo)
      })
  }, [id])

  return <div>
    ID: {id}
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;