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
        var temp1El = document.getElementById("temp1");
        temp1El.textContent += temp1 + " C";

        var wind1 = data2.daily[0].wind_speed;
        var wind1El = document.getElementById("wind1");
        wind1El.textContent += wind1 + " km/h";

        var humid1 = data2.daily[0].humidity;
        var humid1El = document.getElementById("humid1");
        humid1El.textContent += humid1 + " %";
        //
        var temp2 = data2.daily[1].temp.day;
        var temp2El = document.getElementById("temp2");
        temp2El.textContent += temp2 + " C";

        var wind2 = data2.daily[1].wind_speed;
        var wind2El = document.getElementById("wind2");
        wind2El.textContent += wind2 + " km/h";

        var humid2 = data2.daily[1].humidity;
        var humid2El = document.getElementById("humid2");
        humid2El.textContent += humid2 + " %";

        //
        var temp3 = data2.daily[2].temp.day;
        var temp3El = document.getElementById("temp3");
        temp3El.textContent += temp3 + " C";

        var wind3 = data2.daily[2].wind_speed;
        var wind3El = document.getElementById("wind3");
        wind3El.textContent += wind3 + " km/h";

        var humid3 = data2.daily[2].humidity;
        var humid3El = document.getElementById("humid3");
        humid3El.textContent += humid3 + " %";

        //
        var temp4 = data2.daily[3].temp.day;
        var temp4El = document.getElementById("temp4");
        temp4El.textContent += temp4 + " C";

        var wind4 = data2.daily[3].wind_speed;
        var wind4El = document.getElementById("wind4");
        wind4El.textContent += wind4 + " km/h";

        var humid4 = data2.daily[3].humidity;
        var humid4El = document.getElementById("humid4");
        humid4El.textContent += humid4 + " %";

        //
        var temp5 = data2.daily[4].temp.day;
        var temp5El = document.getElementById("temp5");
        temp5El.textContent += temp5 + " C";

        var wind5 = data2.daily[4].wind_speed;
        var wind5El = document.getElementById("wind5");
        wind5El.textContent += wind5 + " km/h";

        var humid5 = data2.daily[4].humidity;
        var humid5El = document.getElementById("humid5");
        humid5El.textContent += humid5 + " %";

        // UV for main card
        var uviMain = data2.current.uvi;
        var uviEl = document.getElementById("uv-index");
        uviEl.textContent += uviMain;
      });
    }
  });
};

searchButtonEl.addEventListener("click", weatherCard);
