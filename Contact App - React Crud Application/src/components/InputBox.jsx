import React from 'react'

export default function ({inputs,inputHandler,submitHandler,editClick}) {
  return (
    <form onSubmit={submitHandler} className='InputBox'>
        <input type="text" placeholder='Name' name='name' value={inputs.name} onChange={inputHandler}/>
        <input type="text" placeholder='Email' name='email' value={inputs.email} onChange={inputHandler} />
        <button type="submit">{editClick?"Update":"Add"}</button>
    </form>
  )
}
