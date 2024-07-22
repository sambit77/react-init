import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: 'sambbit',
    age: 25,
    address: {
    city: 'Bbsr',
    state: 'Odisha'
  }
  }

  let newArr = [1,2,3,4,5];
  return (
    <>
      <h1 className='text-3xl bg-slate-500 p-3 rounded-md'>Vite with tailwind</h1>
      <Card username="Sambit" myArr={newArr} src='https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg'/>
      <Card username="rocket singh" post='consultant' src='https://static.independent.co.uk/2021/05/24/20/doge.jpg'></Card>
      <Card src='https://upload.wikimedia.org/wikipedia/commons/e/e8/Suhana_Khan_at_the_premiere_of_her_film_The_Archies_%28cropped%29.jpg'></Card>
    </>
    
  )
}

export default App
