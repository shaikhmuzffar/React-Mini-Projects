import Navbar from './Navbar'
import InputBox from './InputBox'
import TodoBox from './TodoBox'
import React, { useEffect, useState } from 'react'

export default function TodoList() {

    const [todo,setTodo] = useState([])
    const removeHandler = (id) =>{
        console.log(id)
        const newTodo =  todo.filter((data,Index)=>{
            if(Index!==id){
                return true
            }else{
                return false;
            }
        })
        setTodo(newTodo)
    }
    useEffect(()=>{
        console.log("rendering...")
    },[todo])
    const changeHandler = (value) =>{
        // console.log(value)
        setTodo(
            [...todo,
                {value,time:new Date().toLocaleTimeString()}
            ]
            )
    }
    return (
        <section className="todoListSection">
            <div className="todoList">
                <Navbar />
                <InputBox changeHandler={changeHandler} />
                <TodoBox todo={todo} removeHandler={removeHandler} />
            </div>
        </section>
    )
}
