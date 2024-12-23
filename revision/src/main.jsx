import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import App from './App'
import Form from './Form'
import Login from './Login'
import React from 'react'
// const numbers = [1,2,3,4,5];
// const list = numbers.map((number)=>{
//   return <li>{number}</li>
// });

// const App = ()=>{
//   return (
//     <ul>
//       {list}s
//     </ul>
//   )
// };

const menu = [1,2,3,4,5];
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/'element = {<App menuitems={menu}/>} />
    <Route path='/form'element = {<Form/>} />
    <Route path='/login'element = {<Login/>} />
    </>
  )
)
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
