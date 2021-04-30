import React from "react";

export default function ForecastDaily({ data }) {
  function day() {
    let date = new Date(data.dt * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[date.getDay()];

    return day;
  }

  let iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  return (
    <div className="ForecastDaily">
      <div className="card">
        <div className="card-body card-forecast">
          <div className="day">{day()}</div>
          <br />
          <img
            src={iconUrl}
            className="daily-icon"
            alt={data.weather[0].icon.description}
          />
          <div className="temp">
            <strong>{Math.round(data.temp.max)}° </strong>
            {Math.round(data.temp.min)}°
          </div>
          <br />
          <div className="weather-description">
            {data.weather[0].description}
          </div>
        </div>
      </div>
    </div>
  );
}
