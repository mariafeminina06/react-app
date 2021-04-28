import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeatherReport.css";
import "./LocalDate";
import LocalDate from "./LocalDate";

export default function CurrentWeatherReport() {
  const [currentWeatherData, setCurrentWeatherData] = useState({
    loaded: false,
  });

  let searchform = (
    <div className="Search">
      <div className="search-engine">
        <div className="card main-section">
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search a city"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="col-2">
                  <button type="button" className="btn btn-secondary">
                    <i className="fas fa-map-marker-alt"></i>
                  </button>
                </div>
                <div className="col-2">
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-search"></i> Search
                  </button>
                </div>
              </div>
            </form>
            <h6 id="current-time" className="current-time">
              <LocalDate />
            </h6>
          </div>
        </div>
      </div>
    </div>
  );

  function handleResponse(response) {
    console.log(response.data);
    setCurrentWeatherData({
      loaded: true,
      city: response.data.name,
      country: response.data.sys.country,
      localTime: "20:12",
      localDay: "Tuesday",
      localDate: "30 March 2021",
      weatherDescription: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      currentCelsiusTemp: Math.round(response.data.main.temp),
      celsiusFeels: Math.round(response.data.main.feels_like),
      currentCelsiusMax: Math.round(response.data.main.temp_max),
      currentCelsiusMin: Math.round(response.data.main.temp_min),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (currentWeatherData.loaded) {
    return (
      <div>
        {searchform}
        <div className="CurrentWeatherReport">
          <div className="current-city">
            <div className="card main-section">
              <div className="card-body">
                <h3>
                  {currentWeatherData.city}, {currentWeatherData.country}
                </h3>
                <div className="date">
                  <p>
                    Local Time: <strong>{currentWeatherData.localTime}</strong>
                    <br />
                    Local Date:{" "}
                    <strong>
                      {currentWeatherData.localDay},{" "}
                      {currentWeatherData.localDate}{" "}
                    </strong>
                    <br />
                    <span className="weather-description">
                      {currentWeatherData.weatherDescription}
                    </span>
                  </p>
                </div>
                <div className="current-weather">
                  <div className="row">
                    <div className="col-3">
                      <img
                        src={currentWeatherData.iconUrl}
                        className="current-weather-icon"
                        alt={currentWeatherData.weatherDescription}
                      />
                    </div>
                    <div className="col-4">
                      <span className="current-temperature">
                        {currentWeatherData.currentCelsiusTemp}
                      </span>
                      <span className="degree-units">
                        <a href="/" className="active">
                          °C{" "}
                        </a>
                        |<a href="/">°F</a>
                      </span>
                    </div>
                    <div className="col-5">
                      <ul>
                        <li>Feels like: {currentWeatherData.celsiusFeels}°</li>
                        <li>Min: {currentWeatherData.currentCelsiusMin}°</li>
                        <li>Max: {currentWeatherData.currentCelsiusMax}°</li>
                        <li>Humidity: {currentWeatherData.humidity}%</li>
                        <li>Wind: {currentWeatherData.wind} km/h</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "c92de5786a79d17709375c8c4a5c958a";
    let city = "Tokyo";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
