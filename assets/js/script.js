// API CALL https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// API KEY 6ecb740b9cbedf922390430f98d58d81

var searchButtonEl = document.getElementById("search-btn");
var weatherCardEl = document.getElementById("weather-card");
var futureCardsEl = document.getElementById("future-forecast");
var inputValue = document.getElementById("input-value");
var cityNameEl = document.getElementById("city-name");
var todaysDateEl = document.getElementById("current-date");
var momentDateToday = moment().format("L");
var card1 = document.getElementById("card-1");
var card2 = document.getElementById("card-2");
var card3 = document.getElementById("card-3");
var card4 = document.getElementById("card-4");
var card5 = document.getElementById("card-5");

function weatherCard(event) {
  event.preventDefault();
  weatherCardEl.classList.remove("hide");
  futureCardsEl.classList.remove("hide");
  $(todaysDateEl).text(
    $(todaysDateEl).text().replace("current date", momentDateToday)
  );
  $(cityNameEl).text(
    $(cityNameEl).text().replace("City Name", inputValue.value)
  );
  $(card1).text(
    $(card1).text().replace("00/00/0000", moment().add(1, "days").format("L"))
  );
  $(card2).text(
    $(card2).text().replace("00/00/0000", moment().add(2, "days").format("L"))
  );
  $(card3).text(
    $(card3).text().replace("00/00/0000", moment().add(3, "days").format("L"))
  );
  $(card4).text(
    $(card4).text().replace("00/00/0000", moment().add(4, "days").format("L"))
  );
  $(card5).text(
    $(card5).text().replace("00/00/0000", moment().add(5, "days").format("L"))
  );
}

searchButtonEl.addEventListener("click", weatherCard);

// fetch(
//   "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
// );
