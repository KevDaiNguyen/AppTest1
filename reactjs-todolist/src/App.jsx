import { useState, useEffect } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState("")

  function persistData(newList)
  {
    localStorage.setItem("todos", JSON.stringify({ todos: newList}))
  }

  function handleAddTodos(newTodo) {
   const newToDoList = [...todos, newTodo]
   persistData(newToDoList)
   setTodos(newToDoList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, toDoIndex) => {
      return toDoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index){
    const valueToDoBeEdited = todos[index]
    setTodoValue(valueToDoBeEdited)
    handleDeleteTodo(index)
  }
 
  useEffect(() => {
    if (!localStorage){
      return
    }

    let localTodos = localStorage.getItem("todos")
    if (!localTodos){
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <ToDoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <ToDoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
