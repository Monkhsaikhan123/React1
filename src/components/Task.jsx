import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({tasks123, onDelete}) => {
  return (
    <div className='task'>
        <h3>{tasks123.text} <FaTimes style={{color : 'red'}} onClick={()=>{onDelete(tasks123.id)}}/></h3>
    </div>
  )
}

export default Task