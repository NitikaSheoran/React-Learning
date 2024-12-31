import './App.css'
import AddTodo from './components/AddTodo'
import Themebtn from './components/Themebtn'
import Todos from './components/Todos'

function App() {
  return (
    <>
      <h1>Learn redux toolkit</h1>
      <Themebtn />
      <AddTodo />
      <Todos />
    </>
  )
}

export default App