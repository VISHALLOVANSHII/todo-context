import React, { useContext, useState } from 'react'
import TodoContext from '../context/TodoContext';

const ListItem = ({todo}) => {
  const { deleteTodo, editTodo } = useContext(TodoContext)
  return (
    <>
      <li className='list-group-item'>
        {todo.text}
        <button className="btn btn-danger rounded-3 float-end"
          onClick={() => deleteTodo(todo.id)}>Delete</button>
        <button className="btn btn-warning rounded-3 float-end mx-2" onClick={() => editTodo(todo)}>Update</button>
      </li>
    </>
  );

};

export default ListItem