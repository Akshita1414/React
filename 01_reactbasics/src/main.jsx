import React from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-dev-runtime.js"
import App from './App.jsx'

function MyApp(){
  return(
    <div>
    <h1>Custom App made</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherUser = "Akshita"

const reactElement = React.createElement(
   'a', // Tag
   {href: 'https://google.com', target: '_blank'}, // set attributes
   'click me to visit' ,// Text
    anotherUser //variable injection
)

const anotherElement = (
  <a href= "https://google.com" target = '_blank'>Visit google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  // Toh basically ye simple func call ki trh bhi chl gya
  // <MyApp />
  // MyApp()

  // But ye nhi chlega kyuki it is a tree structure
  // <reactElement/>

  // anotherElement // Ye bh chl jyga

  // reactElement // Ab ye hmne react ki llib se bnaya h toh ye chl jyga

<App/>
)
