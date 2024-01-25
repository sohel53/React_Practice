import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  // let counter = 5
  const addValue = () => {
    console.log('clicked', counter)
    // counter = counter + 1
    setCounter(counter + 1)
    
  }

  const removeValue = () => {
    if(counter < 1) {
      alert('Below 0 not valid')
    } else {
      setCounter(counter - 1)
    }
    
  }

  const reset = () => {
    setCounter(0)
  }

  return (
    <>
    
      <h1>Vite React App</h1>
      <h2>Counter App {counter}</h2>
      <button id = 'add' onClick={addValue}>Increase</button>&nbsp;&nbsp;
      <button id= 'remove' onClick={removeValue}>Decrease</button>&nbsp;&nbsp;  
      <button id= 'reset' onClick={reset}>Reset</button>

    </>
  )
}

export default App
