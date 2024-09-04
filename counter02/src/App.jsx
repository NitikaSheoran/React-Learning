import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //hook
  let [counter, setCounter] = useState(5)  //return an array of two elements (a variable and a function)
  // (will update the variable counter everywhere in ui)
  const addValue = ()=>{
    if(counter<=20){
      counter ++;
      setCounter(counter);
    } 
  }

  const removeVal = ()=>{
    if(counter >= 0){
      counter --;
      setCounter(counter);
    }
    
  }

  // tried updation variable using normal javascript but changes does not reflect in ui
  //let counter = 5;  (variable will be updated but will not reflect in ui so better remove it)
  //const addValue = ()=>{
    //counter++;    here counter is increasing but not getting updated in return statement(problem in ui updation)(hooks come in effect here)(ui updation ko react control krta h)
  //}


  return (
    <>
      <h1>Day 5</h1>
      <h2>Counter: {counter}</h2>
      
      <button onClick = {addValue}>Add Value</button>
      <br />
      <button onClick = {removeVal}>Remove value</button>
    </>
  )
}

export default App
