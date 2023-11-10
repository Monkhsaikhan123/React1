import React from 'react'
import Task from './Task'


const Tasks = ({tasks123, onDelete}) => {

  return (
    <>
    {tasks123.map((array) => (
        <Task key={array.id} tasks123={array} onDelete={onDelete}/>
    ))}
    </>
  )
}

export default Tasks