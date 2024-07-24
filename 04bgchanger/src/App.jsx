import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  // function changeColor(color){
  //   setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center
       bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center
        gap-3 shadow-lg bg-white rounded-3xl'>
          <button 
          //onClick={() => changeColor('red')} 
          onClick={() => setColor('red')}
          className='outline-none px-4 py-1 
          rounded-full shadow-lg text-black'

          style={{backgroundColor: 'red'}}
          >Red</button>
          <button 
          //onClick={() => changeColor('green')}
          onClick={() => setColor('green')}
           className='outline-none px-4 py-1 
          rounded-full shadow-lg text-black'

          style={{backgroundColor: 'green'}}
          >Green</button>
        
          <button 
          //onClick={() => changeColor('green')}
          onClick={() => setColor('blue')}
           className='outline-none px-4 py-1 
          rounded-full shadow-lg text-black'

          style={{backgroundColor: 'blue'}}
          >Blue</button>

          <button
           onClick={() => setColor('purple')}
           className='outline-none px-4 py-1 
          rounded-full shadow-lg text-black'

          style={{backgroundColor: 'purple'}}>
            Purple
          </button>
         
          
        </div>

      </div>

    </div>
  )
}

export default App
