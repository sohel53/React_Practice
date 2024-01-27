import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='text-left text-4xl text-white'>
      <img  className='outline-none ' src='https://image.shutterstock.com/image-vector/speech-search-logo-unique-color-260nw-2273126553.jpg' />
      <h1>KeazoN</h1>
      <h3>Books</h3>
     </div>
    </>
  )
}

export default App
