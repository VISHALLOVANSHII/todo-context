import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../context/TodoContext'
 
const Form = () => {
  const { saveTodo , edit ,updateTodo} = useContext(TodoContext);

const [text ,setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(edit.isEdit){
      updateTodo(edit.todo.id ,text);
    }else{
      saveTodo(text);
    }
    setText("");
  }
useEffect(() =>{
  setText(edit.todo.text);
} , [edit]);

  return (
    <form onSubmit={handleSubmit}> 
    <input type="text" placeholder='Enter Text here' className="control-from rounded-0 w-100 my-3 " 
    onChange={(e) => setText(e.target.value)} value={text}/>
    <button className="btn btn-primary  rounded-3 w-100 my-1">save</button>
</form>
  )
}

export default Form;