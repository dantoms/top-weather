const unitSwitch = document.querySelector(".unit-toggle");
let unit = "uk";
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
