import React, { useState } from 'react'
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
function TodoForm({addTodo}) {
    const [title , setTitle] = useState("")
    function handleSubmit(e){
        e.preventDefault();
        if(title.trim().length === 0){
            toast.info("Please fill input",{
                autoclose: 2000,
            })
            return;
        }
        const newTodo = {
            id: uuid(),
            title: title,
            completed: false,
        }
        addTodo(newTodo);
        setTitle("")
    }
  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input type="text" className='todoForm_input' value={title} onChange={(e)=>setTitle(e.target.value)} />
        <button type='submit' className='todoForm_btn'>Add</button>
    </form>
  )
}

export default TodoForm