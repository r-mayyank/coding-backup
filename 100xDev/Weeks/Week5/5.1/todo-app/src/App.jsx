
import { useState } from 'react'

function App() {
  // state of an todo app 
  // todo { todos: [{title: "todo1", desc: "First todo", completed: false}] }
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "Sutdy DSA 9-11",
    completed: false
  }])

  function addTodo() {
    setTodos([...todos, {
      title: "new todo",
      description: "desc of new todo"
    }])
  }

  return (
    <>
      <div>
        <button onClick={addTodo}>Add a random todo</button>
        {todos.map(function(todo) {
          return <Todo title={todo.title} description={todo.description} />
        })}
      </div>
    </>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    
  </div>
}
export default App
