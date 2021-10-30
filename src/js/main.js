import "../scss/style.scss"

const temperature = document.getElementById("temperature")
const feelsLike = document.getElementById("feels like")
const windSpeed = document.getElementById("wind speed")
const humidity = document.getElementById("humidity")
const pressure = document.getElementById("pressure")
const weather = document.getElementById("weather")

const URL1 = "http://api.openweathermap.org/data/2.5/weather?q=Kyiv,ua&lang=ua&units=metric&APPID=6d10963869cca01f122105009ce9bf00"

function Round(input, precision = 1){
  return Math.round(input * 10**precision) / 10**precision
}

function fillHTML(response){
  temperature.textContent = `${Round(response.main.temp)}`
  feelsLike.textContent = `${Round(response.main.feels_like)}`
  windSpeed.textContent = `${Round(response.wind.speed)}`
  humidity.textContent = `${Round(response.main.humidity)}`
  pressure.textContent = `${Round(response.main.pressure)}`
  weather.textContent = `${response.weather[0].description}`
}

let response1;

fetch(URL1)
  .then(response => response.json())
  .then(r => {
    response1 = r
    console.log(response1)
    fillHTML(response1)
  })
  .catch(err => console.log(err))

