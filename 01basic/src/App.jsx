import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const increase = ()=> {
    if( count < 20){
      setCount(count+1)
  }}
  const decrease = ()=>{
    if( count > 0){
      setCount(count-1)
   }

  }

  return (
    <>
    <h1> counter : {count}</h1>
   

    <button onClick={increase}>click me to increase</button>
    <button onClick={decrease}>click me to decrease</button>

      
    </>
  )

   
}

  export default App

