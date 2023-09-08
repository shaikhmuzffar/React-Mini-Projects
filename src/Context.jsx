import { createContext, useContext, useEffect, useState  } from "react";

export const AppContxt =createContext(null);

export const AppProvider =(props)=>{
    const [isLoading,setIsLoading]=useState(true)
    const [movies,setMovies]=useState([])
    const [query,setQuery] =useState('war')


    // const Api="https://www.omdbapi.com/?apikey=b9e76ef8&s=war"

    const Api="https://www.omdbapi.com/?apikey=b9e76ef8"

    const getMoviesApi = async(api) =>{
        const res =await fetch(`${api}&s=${query}`);
        const data=await res.json();
        if(data.Response === "True"){
        setMovies(data.Search)
        setIsLoading(false)
        }
    }

    useEffect(()=>{
        getMoviesApi(Api)
    },[query])

    return <AppContxt.Provider value={{movies,query,setQuery}} >
        {props.children}
    </AppContxt.Provider>
}
export const useGlobalcontext = () =>{
    return useContext(AppContxt)
  }
  