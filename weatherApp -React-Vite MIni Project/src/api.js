const getWeatherData = async() =>{
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=solapur&appid=83408c61e04d375a7021bcaf411896a5",{method:"GET"});
    return response.json();
}
export default getWeatherData;



// https://api.openweathermap.org/data/2.5/weather?q=solapur&appid=83408c61e04d375a7021bcaf411896a5