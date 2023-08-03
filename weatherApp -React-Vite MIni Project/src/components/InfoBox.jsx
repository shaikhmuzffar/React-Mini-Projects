import React from 'react'

export default function InfoBox({ weatherData,history,searchHistoryHandler }) {
  return (
    
    // var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
   <div className='InfoBox'>
    {
      weatherData.name !==undefined?<><h3>city Name:{weatherData.name}</h3>
      <div className="weatherInfo">
        <div className="leftBox">
          {
            history.map((h,index)=><span onClick={()=>searchHistoryHandler(h)} key={index}>{h}</span>)
          }
        </div>
        <div className="rightBox">
          <div className="left">
            <span>Max-temp:{weatherData.main.temp_max}</span>
            <span><img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" /></span>
          </div>
          <div className="right">
            <span>Min-temp:{weatherData.main.temp_min}</span>
            <span>{weatherData.weather[0].main}</span>
          </div>
        </div>
      </div></>:<h3 style={{textAlign:"center"}}>Please enter City</h3>
    }
   
 </div> 
  
  )
}
