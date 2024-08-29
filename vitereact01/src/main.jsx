import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function App2(){
  return(
    <div>
      <h1>Day 4</h1>
    </div>
  )
}

// This object might give an error because the syntax or naming for keys might not be correct.
// The HTML provided by the component is converted to this tree-like structure in React.
const customElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google',
}

const user = "chai aur code";
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'click me to visit google',
  user
)
createRoot(document.getElementById('root'))
.render(
  <>
  <App />     {/*App() also works because at the end app is a function returning some html element */}
  <App2 />   
  {/* customElement won't work directly because React doesn't understand direct HTML or manually created objects unless they are properly formatted.*/}
  {reactElement}   {/*// Rendered using React.createElement, which is how React internally handles JSX.*/}
  </>
)
