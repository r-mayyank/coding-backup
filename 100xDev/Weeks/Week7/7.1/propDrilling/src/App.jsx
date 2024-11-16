import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // In propDrilling we have to pass the props from parent to child and then to grandchild
  // so we have to pass the props from App to Count and then to Buttons

  // in prop drilling we try to have state in most bottom component and then pass it to the top component
  // but as the tree grows it becomes difficult to pass the props to the top component
  // then we use context api to pass the props to the top component
  return (
    <div>
      <Count count={count}  setCount={setCount} />
      {/* have the buttons component in Count fn */}

      {/* <Buttons count={count} setCount={setCount} /> */}

      {/* now we need to pass setCount from Count component */}

      {/* now the problem is that we have to pass setCount from App to Count and then to Buttons */}
      
      {/* so we can use context api to pass the setCount to Buttons component */}
    </div>

  )
}

function Count({ count, setCount }) {
  return <div>
    {count}
    <Buttons count={count} setCount={setCount} />
  </div>
}

function Buttons({count, setCount}) {
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App
