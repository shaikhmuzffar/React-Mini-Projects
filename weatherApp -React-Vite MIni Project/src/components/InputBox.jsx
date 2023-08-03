import React, { useRef } from 'react'
import { BiSearchAlt } from 'react-icons/bi'

export default function (props) {
    const inputRef=useRef()
  return (
    <div className='inputBox'>
        <input type="text" value={props.search} ref={inputRef} onChange={()=>props.getSearch(inputRef.current.value)} />
        <span  className='search' onClick={props.getWeather} ><BiSearchAlt/>Search</span>
    </div>
  )
}
