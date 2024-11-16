import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// This topic is for memo - it makes only the the component changing re-render not making all childs under parents
// https://react.dev/reference/react/memo

//This app makes the only first title re-render when the button is clicked 
//This targets to minimize the re-render 

function App() {
  return (
    <div>
      <HeaderWithButton />
      <Header title="mayank1"></Header>
    </div>
  )
}
function HeaderWithButton() {
  const [firstTitle, setFirstTitle] = useState("My name is mayank")

  function changeTitle() {
    setFirstTitle("My name is " + Math.random());
  }

  return <>
    <button onClick={changeTitle}>Update the title</button>
    <Header title={firstTitle}></Header>
  </>
}
function Header({title}) {
  return <div>
    {title}
  </div>
}

// const Header = React.memo(function Header({title}) {
//   return <div>
//     {title}
//   </div>
// })

export default App
