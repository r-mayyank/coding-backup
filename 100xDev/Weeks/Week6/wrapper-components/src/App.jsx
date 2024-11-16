import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return <div>
    <CardWrapper> 
      <div>hi there </div>
    </CardWrapper>
    {/* <CardWrapper innerComponent={<TextComponent />} /> */}
  </div>
}

function CardWrapper({children}) {
  return <div style={{border:"2px solid black"}}>
    {children}
  </div>
}

// function TextComponent() {
//   return <div>
//     hi there
//   </div>
// }

// function CardWrapper({innerComponent}) {
//   return <div style={{border:"2px solid black"}}>
//     {innerComponent}
//   </div>
// }

export default App
