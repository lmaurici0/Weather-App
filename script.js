//Variables
var input = document.querySelector("input");
var button = document.querySelector("button");
var place = document.querySelector("#place");
var degrees = document.querySelector("#degrees");
var img = document.querySelector("img");
var wind = document.querySelector("#wind");
var content = document.querySelector(".content");

button.addEventListener("click", () => {
  //Verify Input value
  if (!input.value) return;
  getDataApi();
});

async function getDataApi() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
    input.value
  )}&units=metric&appid=YOUR API KEY`;
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      loadData(data);
    });
}

function loadData(data) {
  place.innerText = `${data.name}, ${data.sys.country}`;
  degrees.innerText = `Temperatura: ${Math.floor(data.main.temp)}° C`;
  img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  wind.innerText = `Vento: ${data.wind.speed} km/h`;
  content.style.display = "flex";
}
