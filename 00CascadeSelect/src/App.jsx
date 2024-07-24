import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const countries = [
    {
      name: "India",
      states: [{
        name: "Bihar",
        cities: ["Patna","Gopalganj"]
      },
      {
        name: "Odisha",
        cities: ["Bhubaneswar","Puri"]
      }
    ],        
    },
    {
      name: "USA",
      states: [
        {
          name: "Virginia",
          cities: ["city1","city2"]
        },
        {
          name: "Los Angelese",
          cities: ["city3","city4"]
        }
      ]
    }
  ];

  const [country,setCountry] = useState();
  const [states,setStates] = useState([]);
  const [state,setState] = useState();
  const [cities,setCities] = useState([]);

  const changeCountry = (event) => {
    setCountry(event.target.value);
    setStates(countries.find(ctr => ctr.name === 
      event.target.value
    ).states);
  };

  const changeState = (event) => {
    setState(event.target.value);
    setCities(states.find(
      st => st.name === event.target.value
    ).cities);
  };
  
  return (
    <>
     <h3>Select Example</h3>

     <select onChange={changeCountry}>
      <option>--Country--</option>
      {
        countries.map(ctr => (
          <option value={ctr.name}>{ctr.name}</option>
        ))
      }
     </select>
      <br></br>
     <select onChange={changeState}>
      <option>--State--</option>
      {
        states.map(st => (
          <option value={st.name}>{st.name}</option>
        ))
      }
     </select>
      <br></br>
     <select>
      <option>--City--</option>
      {
        cities.map(ct => (
          <option value={ct}>{ct}</option>
        ))
      }
     </select>
      
    </>
  )
}

export default App
