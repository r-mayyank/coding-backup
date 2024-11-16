import { useEffect, useMemo, useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  const [input, setInput] = useState(1)
  // const [finalValue, setFinalValue] = useState(0)

  // useEffect(() => {
  //   let count = 0;
  //   for (let i = 1; i<=input; i++) {
  //     count += i;
  //   }
  //   setFinalValue(count);
  // }, [input])

let finalCount = useMemo(() =>{
    let count = 0;
    for (let i = 1; i<=input; i++) {
      count += i;
    }
  return count;
}, [input]);

  return <div>
    <input onChange={(function(e) {
      setInput(e.target.value)
    })} placeholder='Find the sum from 1 to n'></input>
    <br />
    Sum from 1 to {input} is {finalValue}
    <br />
    <button onClick={() => {setCounter(counter+1)}}>Counter {counter}</button>
  </div>
}

export default App
