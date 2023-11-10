import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState} from 'react'
import AddTask from './components/AddTask'

function App () {
  const [tasks123, setTasks] = useState([
    {id:1, text:'xixi'},
    {id:2, text:'xoxo'},
    {id:3, text:'xaxa'},
  ])
//ustgah function
const deleteTask = (id) => {
  console.log(tasks123, id)
  setTasks(tasks123.filter((task)=> task.id !== id))
}
//nemdeg function
  const addTask = (task123)=>{
    const newId = Math.floor(Math.random()*1000)
    const newTask = {id : newId, text:task123}
    setTasks([...tasks123, newTask])
  }


  return (
    <div className="container">
      <Header garchig='Todolist'/>
      <AddTask onAdd={addTask}/>
      {tasks123.length > 0 ? (
        <Tasks tasks123 = {tasks123} onDelete= {deleteTask} />
      ):(
        <h1>Хоосон байна</h1>
      )}
      
    </div>
  )
}

export default App