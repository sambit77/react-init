import { useState,useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const[charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState('')

  //useRef hook 
  const passwordRef = useRef(null)


  //useCllbback hook for function caching 
  const generatePassword = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if(numberAllowed)
      {
        str+= "0123456789";
      }

      if(charAllowed)
      {
        str += "!@#$%^&*()_+";
      }

      for(let i = 0 ; i < length ; i++)
      {
       const char = Math.floor(Math.random() * str.length + 1);
       pass += str.charAt(char);
      }

      setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  //Run a piece of code on variety of changes 
  useEffect(() => {
    generatePassword()
  },[length,numberAllowed,charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select()
  }

  



  return (
    <>
      <div>
        <h1>Password generaator</h1>
        <div className=' size-auto
        bg-center flex shadow roundedlg '>
            <input
            type='text'
            value={password}
            className='outline-none'
            readOnly
            ref={passwordRef}
            >
            </input>

            <button className='outline-none bg-slate-500'
            onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div>
          <div>
            <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(event) => setLength(event.target.value)}
            ></input>
            <label htmlFor='length'>Length : {length}</label>
          </div>
          <div className='flex-grow-0'>
            <input
            type='checkbox'
            value={numberAllowed}
            className='cursor-pointer'
            onChange={() => {
              setNumberAllowed((prev) => !prev )
            }}
            ></input>
            <label htmlFor='number'>Numbers</label>

            <input
            type='checkbox'
            value={charAllowed}
            className='cursor-pointer'
            onChange={() => {
              setCharAllowed((prev) => !prev )
            }}
            ></input>
            <label htmlFor='characters'>Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
