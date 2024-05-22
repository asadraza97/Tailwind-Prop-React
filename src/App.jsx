import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'



function App(){

  let newArr = ["asad","raza","zain"]
  let myObj = {
    name: "asad",
    age: 21
  }
  return(
    <>
    <h1 className='bg-green-400 text-black border rounded-xl p-4'>Tailwind Test</h1>
    <Card username = "Asad Raza"  />
    <Card username= "Shahnaz" btnText = "Visit Me"/>   
    </>
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Card from './components/card'

// function App() {
//   const [count, setCount] = useState(0)
//   let myObj = {
//     name : "Zain",
//     age: 22
//   }

//   let myArr = [1,2,3,4,]
//   return (
//     <>
//       <h1 className='bg-green-400 bg text-black rounded-xl p-4 ' > Tailwind Test</h1>
//       <Card username= "asad raza" btnText = "click me" />
//       <Card username="shahnaz i love u  " btnText = "visit me"/>
//     </>

//   )
// }
// export default App
