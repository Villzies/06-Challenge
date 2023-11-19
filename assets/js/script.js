const weatherBtn = document.getElementById("get-weather")
const weatherCard = document.getElementById("weather-card")
let cityName = document.getElementById("city-name")

const getWeather = function getWeather(event) {
  event.preventDefault();
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${"Austin"}}&limit=${"1"}&appid=${"bf982edcf16eb54619c1e757f8e942ba"}`,{
  method: "GET",
  contentType: "application/json"
})
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data[0]);
  let weatherinfo = data[0].name;
  weatherCard.textContent = weatherinfo;
})

};

weatherBtn.addEventListener("click", getWeather);
