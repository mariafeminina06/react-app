import React from "react";
import ForeignTimezone from "./ForeignTimezone";
import "./CurrentWeatherReport.css";

export default function CurrentWeatherReport({ data }) {
  return (
    <div className="CurrentWeatherReport">
      <div className="CurrentWeatherReport">
        <div className="current-city">
          <div className="card main-section">
            <div className="card-body">
              <h3>
                {data.city}, {data.country}
              </h3>
              <div className="date">
                <div className="time">
                  <ForeignTimezone timezone={data.timezone} />
                  <span className="weather-description">
                    {data.weatherDescription}
                  </span>
                </div>
              </div>
              <div className="current-weather">
                <div className="row">
                  <div className="col-3">
                    <img
                      src={data.iconUrl}
                      className="current-weather-icon"
                      alt={data.weatherDescription}
                    />
                  </div>
                  <div className="col-4">
                    <span className="current-temperature">
                      {data.currentCelsiusTemp}
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
                      <li>Feels like: {data.celsiusFeels}°</li>
                      <li>Min: {data.currentCelsiusMin}°</li>
                      <li>Max: {data.currentCelsiusMax}°</li>
                      <li>Humidity: {data.humidity}%</li>
                      <li>Wind: {data.wind} km/h</li>
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
