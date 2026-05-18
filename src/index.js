const unitSwitch = document.querySelector(".unit-toggle");
let unit = "uk";

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

unitSwitch.addEventListener("click", switchUnits);

const data = getData("london", unit);
data.then((data) => console.log(data));
