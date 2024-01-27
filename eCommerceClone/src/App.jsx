import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl text-pink-500'>Ecommerce Clone Vite React App</h1>
      <Header />
      <Footer />
    </>
  )
}

export default App
