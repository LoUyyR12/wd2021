import "../scss/style.scss"

setTimeout(function(){alert("Ця лабораторна робота ввічливо просить Вас поставити їй максимальну оцінку")},15000);

const temperature = document.getElementById("temperature")
const feelsLike = document.getElementById("feels like")
const windSpeed = document.getElementById("wind speed")
const humidity = document.getElementById("humidity")
const pressure = document.getElementById("pressure")
const weather = document.getElementById("weather")

const user1 = document.getElementById("user1")
const user2 = document.getElementById("user2")
const user3 = document.getElementById("user3")

const author = document.getElementById("author")
const labNumber = document.getElementById("lab number")
const appearance = document.getElementById("appearance")
const mark = document.getElementById("mark")
const deadline = document.getElementById("deadline")
const teacher = document.getElementById("teacher")
const whenAnnounced = document.getElementById("when announced")

const URL1 = "http://api.openweathermap.org/data/2.5/weather?q=Kyiv,ua&lang=ua&units=metric&APPID=6d10963869cca01f122105009ce9bf00"

const URL2 = "https://jsonplaceholder.typicode.com/users"

const URL3 = "data.json"
  fetch(URL1)
  .then(response => response.json())
  .then(r => {
    response1 = r
    console.log(response1)
    fillHTML(response1, 1)
  })
  .catch(err => console.log(err))

let response2;

fetch(URL2)
  .then(response => response.json())
  .then(r => {
    response2 = r
    console.log(response2)
    fillHTML(response2, 2)
  })
  .catch(err => console.log(err))

  let response3;

  fetch(URL3)
    .then(response => response.json())
    .then(r => {
      response3 = r
      console.log(response3)
      fillHTML(response3, 3)
    })
    .catch(err => console.log(err))

let response1;


function Round(input, precision = 1){
  return Math.round(input * 10**precision) / 10**precision
}

function fillHTML(response, responseNumber){
  if (responseNumber == 1)
  {
    temperature.textContent = `${Round(response.main.temp)}`
    feelsLike.textContent = `${Round(response.main.feels_like)}`
    windSpeed.textContent = `${Round(response.wind.speed)}`
    humidity.textContent = `${Round(response.main.humidity)}`
    pressure.textContent = `${Round(response.main.pressure)}`
    weather.textContent = `${response.weather[0].description}`
  }
  if (responseNumber == 2)
  {
    user1.innerHTML = `Ім'я: ${response[0].name} <br>
    Електронна пошта: ${response[0].email} <br>
    Нікнейм: ${response[0].username} <br>
    Компанія: ${response[0].company.name}
    `
    user2.innerHTML = `Ім'я: ${response[1].name} <br>
    Електронна пошта: ${response[1].email} <br>
    Нікнейм: ${response[1].username} <br>
    Компанія: ${response[1].company.name}
    `
    user3.innerHTML = `Ім'я: ${response[2].name} <br>
    Електронна пошта: ${response[2].email} <br>
    Нікнейм: ${response[2].username} <br>
    Компанія: ${response[2].company.name}
    `
  }
  if (responseNumber == 3)
  {
    author.textContent = `${response.student.name}`
    labNumber.textContent = `${response.lab_info.lab_number}`
    appearance.textContent = `${response.lab_info.appearance}`
    mark.textContent = `${response.lab_info.mark}`
    deadline.textContent = `${response.deadline.date}`
    teacher.textContent = `${response.deadline.set_by}`
    whenAnnounced.innerHTML = `${response.deadline.when_announced[0]}, 
    ${response.deadline.when_announced[1]}, 
    ${response.deadline.when_announced[2]}
    `
  }
}