import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  let [count,setCount]=useState(12)
  // let [num,setNum]=useState(12)

  // const IncreaseHandler= ()=>{
  //   setCount((state)=>{
  //   console.log("Previous state",state)
  //   count=state+1
  //   return count
  //   })
  // }
  // const DecreaseHandler= ()=>{
  //   setCount(count-1)
  // }
  // let obj ={
  //   name: "Priyanshndnsjncddsj",
  //   Desc:"Hellodmk dc "
  // }

  // let [txt,setTxt]=useState("Hello")
  // useEffect (()=>{
  //   setTxt("useEffect")
  //   console.log('usefeect run');
    
  // },[txt])
  // useLayoutEffect(()=>{
  //   // setTxt("Uselayout")
  //   console.log('Uselayout');

  // },[txt])

let ref =useRef(0)
let btnRef=useRef();
useEffect(()=>{
console.log("Ref is",++ref.current);
console.log("Count is",count);
console.log("Btnref is",btnRef.current.innerHTML);
},[count])

  return (
    <>
     <h1>Welcome to Reactjs</h1>
     <button onClick={()=>{setCount(count+1)}}>+</button>
     <button ref={btnRef}  >Click Me</button>
    
  </>
  )
}

export default App
