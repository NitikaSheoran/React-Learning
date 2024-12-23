import React from 'react';
import Button from './Button.jsx';
import { ContextProvider } from './context.jsx';

function App(props) {

  const list = props.menuitems;
  const listitems = list.map((item,index)=>{
    return (<li key = {index}>{item}</li>);
});

  return (
    <>
    <ContextProvider value = {{list}}>
      <Button />
    </ContextProvider>
      <ul>{listitems}</ul>
    </>
  );
}

export default App;
