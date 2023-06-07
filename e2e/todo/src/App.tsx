import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([])
  const inputRef = useRef();
  function sayHello() {
    
  }
  const todoList = list.map((li)=><li>{li}</li>)
  return (
    <>
     <ul>{todoList}</ul>
     <input type="text" name="todo" id="inputTodo"/>
     <button onClick={sayHello}>Add</button>
    </>
  )
}

export default App
