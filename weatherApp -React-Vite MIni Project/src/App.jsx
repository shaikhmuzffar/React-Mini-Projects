import { useEffect, useState } from 'react'
import InputBox from './components/InputBox'
import InfoBox from './components/InfoBox'
import axios from 'axios';

function App() {
  const [search, setSearch] = useState('');
  const [weatherData,setWeatherData] =useState([])
  const [history,setHistory] =useState([])

  const getSearch = (serchValue) => {
    setSearch(serchValue)
    // console.log(search)
  }

  const searchHistoryHandler =async (data) =>{
    setSearch(data)
    if (data !== "") {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=83408c61e04d375a7021bcaf411896a5`).then( (response) => {
        // console.log(response.data);
        if(history.indexOf(search) === -1){
          setHistory([...history,search])
        }
        setWeatherData(response.data)
        // console.log("wD",weatherData)
      })
        .catch((error) => {
          console.log(error);
        })
    }
  }

  const getWeather = () => {
    if (search !== "") {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=83408c61e04d375a7021bcaf411896a5`).then( (response) => {
        // console.log(response.data);
        if(history.indexOf(search) === -1){
          setHistory([...history,search])
        }
        setWeatherData(response.data)
        // console.log("wD",weatherData)
      })
        .catch((error) => {
          console.log(error);
        })
    }

  }
  return (
    <>
      <InputBox search={search} getSearch={getSearch} getWeather={getWeather}  />
      <InfoBox weatherData={weatherData} history={history} searchHistoryHandler={searchHistoryHandler} />
    </>
  )
}

export default App
