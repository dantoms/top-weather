import "./style.css";

const locInput = document.querySelector(".location-input");
const unitSwitch = document.querySelector(".unit-toggle");
let unit = "us";

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

function loadData(location) {
  const data = getData(location, unit);
  data.then((data) => console.log(data));
}

unitSwitch.addEventListener("click", switchUnits);

locInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    loadData(locInput.value);
  }
});
