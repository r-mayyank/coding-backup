//hook
import {useState} from 'react';
// //state, componenets
// let state = {
//   count: 0
// }
//jsx

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "Sutdy DSA 9-11",
    completed: false
  }])

  
  return (
    <>
      <div>
        {JSON.stringify(todos)}
      </div>
    </>
  )
}

function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count+1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.count}
    </button>
}

export default App
