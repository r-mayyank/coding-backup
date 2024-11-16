import { Component, useEffect, useState } from 'react'
import './App.css'

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine)

  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));

    return () => {
      window.removeEventListener('online')
      window.removeEventListener('offline')
    }
  }, [])
  return isOnline;
}

function useDebounce(inputValue, timer) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    let timeout = setInterval(() => {
      setDebouncedValue(value)
    }, timer)

    return () => {
      clearTimeout(timeout);
    }
  }, [inputValue])

  return debouncedValue;
}

function App() {
  const isOnline = useIsOnline();

  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500)

  return (
    <div>
      Debounced Value is {debouncedValue}
      <input type="text" onChange={e => setInputValue(e.target.value)} name="" id="" />
    </div>
  )
  // if (isOnline) {
  //   return <div>
  //     You are online
  //   </div>
  // }

  // return (
  //   <div>
  //     u are offline
  //   </div>
  // )
}

export default App
