import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'

function App() {
  const [title, settitle] = useState("My name is Dhruv");
  function changetitle({title}){
    settitle("my name is " + Math.random());
  }

  return (
    <>
    <button onClick={changetitle}>Cick me to change the title </button>
      <Header title={title}></Header>
      <Header title="Dhruv2"></Header>
    </>
  )
}

export default App
