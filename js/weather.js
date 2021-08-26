const weather = document.querySelector(".weather");
const temperture = weather.querySelector(".temperture");
const locate = weather.querySelector(".location");

const API_KEY = "37856b744711e5a8135f432e3533375f";

function onGeoOk(positon) {
  const lat = positon.coords.latitude;
  const lon = positon.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      temperture.innerText = data.main.temp;
      locate.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
