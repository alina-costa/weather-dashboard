// API CALL https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// 5 days https://api.openweathermap.org/data/2.5/weather?q={city name}&cnt=5&appid={API key}
// API KEY 6ecb740b9cbedf922390430f98d58d81
// http://api.openweathermap.org/geo/1.0/direct?q=" + city+"&limit=5&units=metric&appid=6ecb740b9cbedf922390430f98d58d81

var searchButtonEl = document.getElementById("search-btn");
var weatherCardEl = document.getElementById("weather-card");
var futureCardsEl = document.getElementById("future-forecast");
var inputValue = document.getElementById("input-value");
var cityNameEl = document.getElementById("city-name");
var todaysDateEl = document.getElementById("current-date");
var momentDateToday = moment().format("L");
// var card1 = document.getElementById("card-1");
// var card2 = document.getElementById("card-2");
// var card3 = document.getElementById("card-3");
// var card4 = document.getElementById("card-4");
// var card5 = document.getElementById("card-5");

// use moment together with open weather to retrieve the weather for current date and next 5 days
// use moment or openweather to display dates?
// use API to get city name and replace cityNameEl text with
function weatherCard(event) {
  event.preventDefault();
  weatherCardEl.classList.remove("hide");
  futureCardsEl.classList.remove("hide");
  todaysDateEl.textContent = momentDateToday;
  fetchData();
  //   futureCards();
}

function fetchData(city) {
  var city = inputValue.value;
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=6ecb740b9cbedf922390430f98d58d81"
  )
    .then((response) => response.json())
    .then((data) => displayWeather(data));
}

function futureCards(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&&units=metric&appid=6ecb740b9cbedf922390430f98d58d81"
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// come back for icon
function displayWeather(data) {
  var { name } = data;
  var { humidity, temp } = data.main;
  var { speed } = data.wind;
  var { uvIndex } = data.main;
  cityNameEl.textContent = name;
  var cardTempEl = document.getElementById("temp");
  cardTempEl.textContent += temp + " C";
  var cardWindEl = document.getElementById("wind");
  cardWindEl.textContent += speed + " km/h";
  var cardHumidEl = document.getElementById("humid");
  cardHumidEl.textContent += humidity + "%";
  //   var cardUVEl = document.getElementById("uv-index");
  //   cardUVEl.textContent += uvIndex;
}

searchButtonEl.addEventListener("click", weatherCard);
