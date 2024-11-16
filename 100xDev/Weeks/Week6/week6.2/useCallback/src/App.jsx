import { memo, useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const inputFunction = useCallback(() => {
    console.log("hi there");
  }, [])

  return <div>
    <ButtonComponent inputFunction={inputFunction} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const ButtonComponent = memo(({inputFunction}) => {
  console.log("child render");
  
  return <div>
    <button>Button Clicked</button>
  </div>
})

export default App
