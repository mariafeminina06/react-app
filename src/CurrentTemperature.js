import React, { useState } from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature({
  src,
  alt,
  temp,
  feels,
  min,
  max,
  humidity,
  wind,
}) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function returnCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  let icon = (
    <div className="col-3">
      <img src={src} className="current-weather-icon" alt={alt} />
    </div>
  );

  if (unit === "celsius") {
    return (
      <div className="CurrentTemperature">
        <div className="current-weather">
          <div className="row">
            {icon}
            <div className="col-4">
              <span className="current-temperature">{temp}</span>
              <span className="degree-units">
                °C |
                <a href="/" onClick={showFahrenheit}>
                  °F
                </a>
              </span>
            </div>
            <div className="col-5">
              <ul>
                <li>Feels like: {feels}°</li>
                <li>Min: {min}°</li>
                <li>Max: {max}°</li>
                <li>Humidity: {humidity}%</li>
                <li>Wind: {wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CurrentTemperature">
        <div className="current-weather">
          <div className="row">
            {icon}
            <div className="col-4">
              <span className="current-temperature">
                {Math.round(temp * 1.8) + 32}
              </span>
              <span className="degree-units">
                <a href="/" onClick={returnCelsius}>
                  °C
                </a>{" "}
                | °F
              </span>
            </div>
            <div className="col-5">
              <ul>
                <li>Feels like: {Math.round(feels * 1.8) + 32}°</li>
                <li>Min: {Math.round(min * 1.8) + 32}°</li>
                <li>Max: {Math.round(max * 1.8) + 32}°</li>
                <li>Humidity: {humidity}%</li>
                <li>Wind: {wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
