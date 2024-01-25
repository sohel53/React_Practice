import { useState } from 'react'

function App() {
  const [color, setColor] = useState('black')

  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center bg-white shadow-lg gap-3 px-3 py-3 rounded-lg'>
          <button className='outline-none px-3 py-2 rounded-xl shadow-lg' style={{backgroundColor: "red"}} onClick={() => setColor('red')}>Red</button>
          <button className='outline-none px-3 py-2 rounded-xl shadow-lg' style={{backgroundColor: "olive"}} onClick={() => setColor('olive')}>Olive</button>
          <button className='outline-none px-3 py-2 rounded-xl shadow-lg' style={{backgroundColor: "yellow"}} onClick={() => setColor('yellow')}>Yellow</button>
          <button className='outline-none px-3 py-2 rounded-xl shadow-lg' style={{color:"white", backgroundColor: "black"}} onClick={() => setColor('black')}>Black</button>
          <button className='px-3 py-2 rounded-xl shadow-lg' style={{color:"black", backgroundColor: "white"}} onClick={() => setColor('white')}>White</button>
          <button className='outline-none px-3 py-2 rounded-xl shadow-lg' style={{backgroundColor: "orange"}} onClick={() => setColor('orange')}>Orange</button>
          <button className='outline-none px-3 py-2 rounded-xl shadow-lg' style={{backgroundColor: "purple"}} onClick={() => setColor('purple')}>Purple</button>
          <button className='outline-none px-3 py-2 rounded-xl shadow-lg' style={{backgroundColor: "silver"}} onClick={() => setColor('silver')}>Silver</button>
          <button className='outline-none px-3 py-2 rounded-xl shadow-lg' style={{backgroundColor: "blue"}} onClick={() => setColor('blue')}>Blue</button>
          <button className='outline-none px-3 py-2 rounded-xl shadow-lg' style={{backgroundColor: "pink"}} onClick={() => setColor('pink')}>Pink</button>

        </div>

      </div>


      </div>
  )
}

export default App
