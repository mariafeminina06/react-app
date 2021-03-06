import React from "react";
import ForeignTimezone from "./ForeignTimezone";
import CurrentTemperature from "./CurrentTemperature";
import "./CurrentWeatherReport.css";

export default function CurrentWeatherReport({ data }) {
  return (
    <div className="CurrentWeatherReport">
      <div className="CurrentWeatherReport">
        <div className="current-city">
          <div className="card main-section">
            <div className="card-body">
              <h3>
                {data.cityDisplay}, {data.country}
              </h3>
              <div className="date">
                <div className="time">
                  <ForeignTimezone timezone={data.timezone} />
                  <span className="weather-description">
                    {data.weatherDescription}
                  </span>
                </div>
              </div>

              <CurrentTemperature
                src={data.iconUrl}
                alt={data.weatherDescription}
                temp={data.temperature.temp}
                feels={data.temperature.feels_like}
                min={data.temperature.temp_min}
                max={data.temperature.temp_max}
                humidity={data.humidity}
                wind={data.wind}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
