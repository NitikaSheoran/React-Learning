import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "nitika",
    age: 20,
  }
  let arr = ["nitika",20];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded'>Tailwind test (Day 7)</h1>
      <Card username="chai aur code" myObject = {myObj} myArr = {arr} btnText="visit here" />
      <Card username="Nitika" btnText = "click me" />
    </>
  )
}

export default App
