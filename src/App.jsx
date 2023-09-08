import React, { useContext } from 'react'
import Home from './components/Home'
import SingleMovie from './components/SingleMovie'
import { Routes,Route } from 'react-router-dom'

import './App.css'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/singleMovie/:id' element={ <SingleMovie/>}/>
    </Routes>
    </>
  )
}

export default App
