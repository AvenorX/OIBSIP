const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");
const gaugeFillEl = document.getElementById("gaugeFill");
const bulbFillEl = document.getElementById("bulbFill");

const KELVIN_OFFSET = 273.15;

function computeTemp(event) {
  const currentValue = event.target.value === "" ? null : +event.target.value;

  if (currentValue === null) {
    resetAll();
    return;
  }

  let celsiusValue;

  switch (event.target.name) {
    case "celsius":
      celsiusValue = currentValue;
      kelvinEl.value = (currentValue + KELVIN_OFFSET).toFixed(2);
      fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celsiusValue = (currentValue - 32) / 1.8;
      celsiusEl.value = celsiusValue.toFixed(2);
      kelvinEl.value = (celsiusValue + KELVIN_OFFSET).toFixed(2);
      break;
    case "kelvin":
      celsiusValue = currentValue - KELVIN_OFFSET;
      celsiusEl.value = celsiusValue.toFixed(2);
      fahrenheitEl.value = (celsiusValue * 1.8 + 32).toFixed(2);
      break;
    default:
      return;
  }

  updateGauge(celsiusValue);
}

function updateGauge(celsiusValue) {
  const clamped = Math.max(-40, Math.min(60, celsiusValue));
  const percent = ((clamped + 40) / 100) * 100;

  gaugeFillEl.style.height = `${percent}%`;

  let color;
  if (celsiusValue <= 0) color = "#3b82f6";
  else if (celsiusValue <= 20) color = "#22c55e";
  else if (celsiusValue <= 35) color = "#f59e0b";
  else color = "#ef4444";

  gaugeFillEl.style.background = color;
  bulbFillEl.style.background = color;
}

function resetAll() {
  celsiusEl.value = "";
  fahrenheitEl.value = "";
  kelvinEl.value = "";
  gaugeFillEl.style.height = "50%";
  gaugeFillEl.style.background = "#94a3b8";
  bulbFillEl.style.background = "#94a3b8";
}

resetAll();