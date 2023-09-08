import React, { useContext } from 'react'
import { useGlobalcontext } from '../Context'
import Search from '../components/Search'
import { NavLink } from 'react-router-dom'

export default function Home() {

  const {movies} = useGlobalcontext()
  return (
    <>
      <Search />
      
      <div className="MoviesBox container">
        {
          movies.map(movie =>
            <NavLink to={`singleMovie/${movie.imdbID}`}>
            <div className='movieCard '>
              <img src={movie.Poster} alt="" />
              <div className="movieCardInfo">
                <h3>{movie.Title.substring(0, 20)}...</h3>
                <p><span>{movie.Year}</span><span>{movie.Type}</span></p>
              </div>
            </div>
            </NavLink>
          )
        }
      </div >
    </>

  )
}
