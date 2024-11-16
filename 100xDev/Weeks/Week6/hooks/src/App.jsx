import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  //this useEffect is used when the render is mounted
  useEffect(function() {
    alert("hi")
  }, [])

  return <div>
    hi there    
  </div>
}
export default App
