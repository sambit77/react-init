import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },

    children: 'Click to visit Google'

}

function MyApp(){
    return (
        <div>
            <h1>My Custom App</h1>
        </div>
    )
}

const AnotherElement = (
    <a href='https://google.com' target='_blacnk'> Visti==it Google</a>
)

const ActualReactElement = React.createElement(
    'a',
    {href: 'https://google.com' , target: '_blank'},
    'Click to visit Google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
   //MyApp()
   //<AnotherElement></AnotherElement> wont work 
   //AnotherElement works
   //ActualReactElement

   <App/>
  
)
