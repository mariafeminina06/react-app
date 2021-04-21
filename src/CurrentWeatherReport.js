import React from "react";

import "./CurrentWeatherReport.css";

export default function CurrentWeatherReport() {
  let currentWeatherData = {
    city: "Tokyo",
    country: "Japan",
    localTime: "20:12",
    localDay: "Tuesday",
    localDate: "30 March 2021",
    weatherDescription: "Broken Clouds",
    iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
    currentCelsiusTemp: 10,
    celsiusFeels: 12,
    currentCelsiusMax: 20,
    currentCelsiusMin: 0,
    humidity: 80,
    wind: 16,
  };

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
              Today is <strong>30 March 2021</strong>. <br />
              It is currently <strong>13:46</strong>.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );

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
}
