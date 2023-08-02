import React, { useRef } from 'react'
import {FaPlus} from 'react-icons/fa';
export default function InputBox(props) {
  const inputRef =useRef()
  return (
    <div className='InputBox'>
        <input type="text" placeholder='Add Item' ref={inputRef} />
        <span onClick={()=>{
          props.changeHandler(inputRef.current.value)
          inputRef.current.value=""
        }}><FaPlus size="12px" /></span>
    </div>
  )
}
