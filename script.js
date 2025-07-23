// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial

let API_KEY ="8a3c4ab805446fec0fd1a42949a2f4df";

getWeatherData =(city) => {
 const URL='https://api.openweathermap.org/data/2.5/weather'

 const Full_Url = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
const WeatherPromise = fetch(Full_Url);
console.log(city);

return WeatherPromise.then((response) => {
   return response.json()

  })
}

function searchCity(){
    const city = document.getElementById("city-input").value;

    getWeatherData(city)
        .then((response) => {
             showWeatherData(response)
            console.log(response)
        
        })
        .catch((err) => {
            console.log(err)
        })
         
        showWeatherData = (weatherData) =>{
document.getElementById('city-name').innerText = weatherData.name;
document.getElementById('weather-type').innerText = weatherData.weather[0].main;
document.getElementById('temp').innerText = weatherData.main.temp;
document.getElementById('min-temp').innerText = weatherData.main.temp_min;
document.getElementById('max-temp').innerText = weatherData.main.temp_max;
document.getElementById('wind').innerText = weatherData.wind.speed;

document.getElementById('long').innerText = weatherData.coord.lon;
document.getElementById('att').innerText = weatherData.coord.lat;



        }
}