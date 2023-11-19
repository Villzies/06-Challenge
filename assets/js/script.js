const weatherBtn = document.getElementById("get-weather")
const weatherCard = document.getElementById("weather-card")

//function for grabbing geocode information from the openweathermap api
const getWeather = function getWeather(event) {
  event.preventDefault();
fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${"Austin"}}&limit=${"1"}&appid=${"bf982edcf16eb54619c1e757f8e942ba"}`,{
  method: "GET",
  contentType: "application/json"
})
//returns the response of the get request in a json object
.then(function (response) {
  return response.json();
})
//logs the data of the object to the console, sets the value of weatherinfo to the name in the json object, and then displays the information on the weather card
.then(function (data) {
  console.log(data[0]);
  let weatherinfo = data[0].name;
  weatherCard.textContent = weatherinfo;
})

};

weatherBtn.addEventListener("click", getWeather);
