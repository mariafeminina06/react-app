import React from "react";

import "./Forecast.css";

export default function Forecast() {
  let day1 = {
    day: "Day 1",
    iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
    weatherDescription: "Cloudy",
    minTemp: 5,
    maxTemp: 15,
  };

  let day2 = {
    day: "Day 2",
    iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
    weatherDescription: "Cloudy",
    minTemp: 5,
    maxTemp: 15,
  };

  let day3 = {
    day: "Day 3",
    iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
    weatherDescription: "Cloudy",
    minTemp: 5,
    maxTemp: 15,
  };
  let day4 = {
    day: "Day 4",
    iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
    weatherDescription: "Cloudy",
    minTemp: 5,
    maxTemp: 15,
  };
  let day5 = {
    day: "Day 5",
    iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
    weatherDescription: "Cloudy",
    minTemp: 5,
    maxTemp: 15,
  };

  return (
    <div className="Forecast">
      <div className="following-days">
        <div className="card main-section">
          <div className="card-body">
            <h3>Weather for the next 5 days</h3>
            <img
              src="..\img\undraw2_Weather_re_qsmd.svg"
              alt="weather forecast"
              className="forecastImage"
            />
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-body card-forecast">
                    <div className="day">{day1.day}</div>
                    <br />
                    <img
                      src={day1.iconUrl}
                      className="daily-icon"
                      alt={day1.weatherDescription}
                    />
                    <div className="temp">
                      <strong>{day1.maxTemp}° </strong>
                      {day1.minTemp}°
                    </div>
                    <br />
                    <div className="weather-description">
                      {day1.weatherDescription}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body card-forecast">
                    <div className="day">{day2.day}</div>
                    <br />
                    <img
                      src={day2.iconUrl}
                      className="daily-icon"
                      alt={day2.weatherDescription}
                    />
                    <div className="temp">
                      <strong>{day2.maxTemp}° </strong>
                      {day2.minTemp}°
                    </div>
                    <br />
                    <div className="weather-description">
                      {day2.weatherDescription}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body card-forecast">
                    <div className="day">{day3.day}</div>
                    <br />
                    <img
                      src={day3.iconUrl}
                      className="daily-icon"
                      alt={day3.weatherDescription}
                    />
                    <div className="temp">
                      <strong>{day3.maxTemp}° </strong>
                      {day3.minTemp}°
                    </div>
                    <br />
                    <div className="weather-description">
                      {day3.weatherDescription}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body card-forecast">
                    <div className="day">{day4.day}</div>
                    <br />
                    <img
                      src={day4.iconUrl}
                      className="daily-icon"
                      alt={day4.weatherDescription}
                    />
                    <div className="temp">
                      <strong>{day4.maxTemp}° </strong>
                      {day4.minTemp}°
                    </div>
                    <br />
                    <div className="weather-description">
                      {day4.weatherDescription}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body card-forecast">
                    <div className="day">{day5.day}</div>
                    <br />
                    <img
                      src={day5.iconUrl}
                      className="daily-icon"
                      alt={day5.weatherDescription}
                    />
                    <div className="temp">
                      <strong>{day5.maxTemp}° </strong>
                      {day5.minTemp}°
                    </div>
                    <br />
                    <div className="weather-description">
                      {day5.weatherDescription}
                    </div>
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
