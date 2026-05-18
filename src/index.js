import "./style.css";

const locInput = document.querySelector(".location-input");
const unitSwitch = document.querySelector(".unit-toggle");
let unit = "us";

const unitSymbols = {
  uk: "℃",
  us: "℉",
};

async function getData(location, unit) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=${unit}&key=A3TFBZ58P6XLMGNRTQAYKLGVA&contentType=json`,
  );
  return response.json();
}

function switchUnits() {
  if (unit == "uk") {
    unit = "us";
    unitSwitch.textContent = "℉";
  } else {
    unit = "uk";
    unitSwitch.textContent = "℃";
  }
}

function displayData(data) {
  const weatherDetail = document.querySelector(".weather-detail");
  weatherDetail.innerHTML = "";

  const conditions = document.createElement("p");
  conditions.textContent = data.currentConditions.conditions;
  conditions.classList.add("conditions");

  const location = document.createElement("h2");
  location.textContent = data.resolvedAddress;
  location.classList.add("location");

  const tempMore = document.createElement("div");
  tempMore.classList.add("temp-more");

  const temp = document.createElement("p");
  temp.textContent = data.currentConditions.temp;
  temp.style.setProperty("--unit-symbol", `"${unitSymbols[unit]}"`);
  temp.classList.add("temp");

  const more = document.createElement("div");
  more.classList.add("more");

  const feelslike = document.createElement("p");
  feelslike.textContent = `Feel: ${data.currentConditions.feelslike}`;
  feelslike.style.setProperty("--unit-symbol", `"${unitSymbols[unit]}"`);
  feelslike.classList.add("feelslike");

  const windspeed = document.createElement("p");
  windspeed.textContent = `Wind Speed: ${data.currentConditions.windspeed}mph`;
  windspeed.classList.add("windspeed");

  const humidity = document.createElement("p");
  humidity.textContent = `Humidity: ${data.currentConditions.humidity}%`;
  humidity.classList.add("humidity");

  more.append(feelslike, windspeed, humidity);
  tempMore.append(temp, more);
  weatherDetail.append(conditions, location, tempMore);
}

function loadData(location) {
  const data = getData(location, unit);
  data.then((data) => {
    console.log(data);
    displayData(data);
  });
}

unitSwitch.addEventListener("click", switchUnits);

locInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    loadData(locInput.value);
  }
});
