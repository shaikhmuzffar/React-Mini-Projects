import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function SingleMovie() {
  const [singleMovie,setSingleMovie]=useState('')
  const Api="https://www.omdbapi.com/?apikey=b9e76ef8"
  const {id}=useParams()

  const getSingleMovie = async(api)=>{
    const res=await fetch(`${api}&i=${id}`)
    const data=await res.json();
    // console.log("single",data)
    setSingleMovie(data)

  }

  useEffect(()=>{
    getSingleMovie(Api)
  },[id])
  return (
    <div className='singleProduct'>
      <img src={singleMovie.Poster} alt="" />
      <div className="singleProductMovieInfo">
        <h1>{singleMovie.Title}</h1>
        <p><span>{singleMovie.Year}</span> <span>{singleMovie.Genre}</span></p>
        <p><span>{singleMovie.Year}</span> <span>{singleMovie.Plot}</span></p>
      </div>
    </div>
  )
}
