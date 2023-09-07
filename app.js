const apiKey = "d8b5ec233a8bff80f1f673b3eb1e45ff";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q= ";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherText = document.querySelector(".weather-text");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML =
      data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    console.log(data);

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/images/clouds.png";
      weatherText.innerHTML = data.weather[0].description;
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/images/clear.png";
      weatherText.innerHTML = data.weather[0].description;
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/images/rain.png";
      weatherText.innerHTML = data.weather[0].description;
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/images/drizzle.png";
      weatherText.innerHTML = data.weather[0].description;
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/images/mist.png";
      weatherText.innerHTML = data.weather[0].description;
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }

 
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
