import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState("")

    const onSubmit = (e)=>{
        e.preventDefault() //refresh hiigdehiig boliulah
        if(!text){
            alert("Text ee oruulna uu")
        }else{
            onAdd(text)
        }
        setText("")
    }

  return (
    <form 
        className='add-form' 
        //form dotor baigaa submit toroltei input deer daragdah uyd hoino baigaa Onsubmit function ajillana
        onSubmit={onSubmit}> 
        
            <div className='form-control'>
                <label>Task</label>
                <input 
                    value={text} 
                    //Usestate n hooson baigaa uchir oorchlolt orohgui uyd onChange commandar event bii bolj setTextereer oorchilson evente target hiin barij avan valueru hiij baigaa
                    onChange={(e)=>{setText(e.target.value)}} 
                    type='text' 
                    placeholder='Add Task'
                />
            </div>
        <input type='submit' className='btn btn-block' value='Save Task'/>
    </form>
  )
}

export default AddTask