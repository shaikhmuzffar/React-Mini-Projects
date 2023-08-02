import React, { useState } from 'react'
import {BsCircleFill} from 'react-icons/Bs'
import {BsCheckCircleFill} from 'react-icons/Bs'
import {LiaTimesSolid} from 'react-icons/Lia'
import {TfiTime} from 'react-icons/Tfi'
export default function TodoItem(props) {
    const [done,setDone]=useState(false)
    // console.log(done)
    return (
        <div className="todoItem">
            <div onClick={()=>setDone(!done)} >
                {
                    done?<BsCheckCircleFill size="18px" />:<BsCircleFill size="18px" />
                }
                
                <span style={{textDecoration:done?'line-through':'none',opacity:done?'.5':'1'}}>{props.item.value}</span>
            </div>
            <p className='time'><TfiTime /><span>{props.item.time}</span></p>
            <span className='cancel' onClick={()=>props.removeHandler(props.id)}><LiaTimesSolid/></span>
        </div>
    )
}
