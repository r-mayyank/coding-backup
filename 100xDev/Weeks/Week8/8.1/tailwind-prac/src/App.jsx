import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ backgroundColor: "red" }}>first</div>
        <div style={{ backgroundColor: "green" }}>second</div>
        <div style={{ backgroundColor: "yellow" }}>third</div>
      </div>
      <br />
      <div className='flex justify-around	'>
        <div className='bg-red-500'>first</div>
        <div className='bg-green-500'>second</div>
        <div className='bg-yellow-500'>third</div>
      </div>
      <br />
      <div className='grid grid-cols-3'>
        <div className='bg-red-500'>first</div>
        <div className='bg-green-500'>second</div>
        <div className='bg-yellow-500'>third</div>
        <div className='bg-blue-500'>forth</div>
      </div>
      <br />
      <div className='grid grid-cols-10'>
        <div className='bg-red-500 col-span-4'>first</div>
        <div className='bg-green-500 col-span-4'>second</div>
        <div className='bg-yellow-500 col-span-2'>third</div>
      </div>
    </>
  )
}

export default App
