import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

////////////////////////////////
// function MyApp(){
//   return(
//     <div>
//       <h1>Check React App</h1>
//         </div>
//   )
// }
// const ReactElement = {
//   type : "a",
//   props: {
//       href : "https://google.com",
//       target: "_blank"
//   },
//   children: "Click me to visit google"
// }

// const anotherElement = (
//   <a href='http://google.com' target='_blank'> Visit Google</a>
// )



// const reactElement = React.createElement(
//   "a",
//   {href : "https://google.com", target: "_blank"},
//   "click me to visit google"
//   )

  ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
  )   


  // ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
//   reactElement
//   <MyApp/>
//   <App />
//   </>
 
// )

