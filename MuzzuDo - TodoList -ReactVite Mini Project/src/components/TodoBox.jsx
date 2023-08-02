import React from 'react'
import TodoItem from './TodoItem'
export default function TodoBox(props) {
  return (
    <div className='TodoBox'>
      <small>Thing to do:</small>
      {
        props.todo.map((item, index) => <TodoItem key={index} id={index} removeHandler={props.removeHandler} item={item} />)
      }
    </div>
  )
}
