// API CALL https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// API KEY 6ecb740b9cbedf922390430f98d58d81

var searchButtonEl = document.getElementById("search-btn");
var weatherCardEl = document.getElementById("weather-card");

function weatherCard(event) {
  event.preventDefault();
  weatherCardEl.classList.remove("hide");
  console.log("weather card");
}

searchButtonEl.addEventListener("click", weatherCard);
