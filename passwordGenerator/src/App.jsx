import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if (numAllow) str+= '0123456789'
    if(charAllow) str+= '!@#$%^&*()-?/[`~{+'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [length, numAllow, charAllow, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 50)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllow, charAllow, passwordGenerator])

  return (
    <>
      <div className='grid place-items-center w-full h-screen' style={{backgroundColor: "black"}}>
        <div className='w-full max-w-2xl shadow-md rounded-lg px-10 py-5 my-2  bg-gray-700 text-green-500'>
        <h1 className='text-4xl text-center text-white py-4'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            placeholder='password'
            readOnly
            ref={passwordRef}
            className='outline-none px-1 w-full py-3' 

            />
            <button
            onClick={copyPassword}
            className='outline-none bg-blue-700 hover:bg-blue-900 text-white px-3 py-0.5 shrink-0'>
              Copy
            </button>
          </div>
          <div className='flex text-sm gap-x-20'>
            <div className='flex items-center gap-x-1'>
              <input 
              type='range'
              min={6}
              max={80}
              value={length}
              className='cursor-pointer' 
              onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              value={numAllow}
              id='numberInput'
              onChange={() => {
                setNumAllow((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              value={charAllow}
              id='charInput'
              onChange={() => {
                setCharAllow((prev) => !prev)
              }}
            />
            <label htmlFor='charInput'>characteristics</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
