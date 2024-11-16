import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { array } from 'zod'
// This topic is for Keys 
// https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key

///Create a simple To-Do app that renders 3 todos
// 1. create a todo component that accepts title,description as input 
// 2. initialise a state array that has 3 todos
// 3. iterate overr the array to render all todos
// 4. a button in the top level app component to add a new todo

let counter = 4;

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "go to gym",
    description: "go to gym 9-11"
  },{
    id: 2,
    title: "go to gym 2",
    description: "go to gym 9-11"
  }, {
    id: 3,
    title: "go to gym 3",
    description: "go to gym 9-11"
  }])

  function addTodo() {
    setTodos([...todos, {
      id: counter++, 
      title: "go to gym 4",
      description: "go to gym 1-2"
    }])
  }
  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title, description}) {
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}

export default App
