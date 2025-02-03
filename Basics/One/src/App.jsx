import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  let [count,setCount]=useState(0)

  const IncreaseHandler= ()=>{
    setCount((state)=>{
    console.log("Previous state",state)
    count=state+1
    return count
    })
  }
  const DecreaseHandler= ()=>{
    setCount(count-1)
  }
  return (
    <>
     <h1>Welcome to Reactjs</h1>
     {/* <p>Count:{count}</p>
    <button onClick={IncreaseHandler}>+</button>
     <button onClick ={DecreaseHandler}>-</button>  */}
    <Card name="Priyansh" Desc="Working Proffesional" />
    <Card name="Priyakmkkkmknsh" Desc="Working Proffesional" btnTxt="Click Now"/>

  </>
  )
}

export default App
