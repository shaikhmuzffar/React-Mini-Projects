import React from 'react'
import {useGlobalcontext} from '../Context'
export default function Search() {
  const {query,setQuery} =useGlobalcontext()
  return (
    <div className='SearchSection container'>
      <h3>Search Movies</h3>
      <form action="">
        <input type='text' placeholder='Search' value={query} onChange={(e)=>setQuery(e.target.value)} />
      </form>
    </div>

  )
}
