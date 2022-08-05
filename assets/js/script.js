// API CALL https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// 5 days https://api.openweathermap.org/data/2.5/weather?q={city name}&cnt=5&appid={API key}
// API KEY 6ecb740b9cbedf922390430f98d58d81
// http://api.openweathermap.org/geo/1.0/direct?q=" + city+ "&limit=5&units=metric&appid=6ecb740b9cbedf922390430f98d58d81
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

var searchButtonEl = document.getElementById("search-btn");
var weatherCardEl = document.getElementById("weather-card");
var futureCardsEl = document.getElementById("future-forecast");
var inputValue = document.getElementById("input-value");
var cityNameEl = document.getElementById("city-name");
var todaysDateEl = document.getElementById("current-date");
var momentDateToday = moment().format("L");

function weatherCard(event) {
  event.preventDefault();
  weatherCardEl.classList.remove("hide");
  futureCardsEl.classList.remove("hide");
  todaysDateEl.textContent = momentDateToday;

  var card1 = document.getElementById("card-1");
  card1.textContent = moment().add(1, "days").format("L");
  var card2 = document.getElementById("card-2");
  card2.textContent = moment().add(2, "days").format("L");
  var card3 = document.getElementById("card-3");
  card3.textContent = moment().add(3, "days").format("L");
  var card4 = document.getElementById("card-4");
  card4.textContent = moment().add(4, "days").format("L");
  var card5 = document.getElementById("card-5");
  card5.textContent = moment().add(5, "days").format("L");
  fetchData();
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
  //   var uvEl = document.getElementById("uv-index");
  //   uvEl.textContent += uvIndex;
  var { lat, lon } = data.coord;
  futureForecast(lat, lon);
}

var futureForecast = function (lat, lon) {
  fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&units=metric&cnt=5&exclude=hourly,minutely&appid=6ecb740b9cbedf922390430f98d58d81"
  ).then(function (response) {
    if (response.ok) {
      response.json().then(function (data2) {
        console.log(data2);
        var temp1 = data2.daily[0].temp.day;
        console.log(temp1);
      });
    }
  });
};

searchButtonEl.addEventListener("click", weatherCard);
