import "../scss/style.scss"

const URL1 = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6d10963869cca01f122105009ce9bf00"

let res1;

fetch(URL1)
  .then(response => response.json())
  .then(r => {res1 = r; console.log(res1)})
  .catch(err => console.log(err))

