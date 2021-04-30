import React, { useState } from "react";
import axios from "axios";

import "./Forecast.css";
import ForecastDaily from "./ForecastDaily";

export default function Forecast({ coordinates }) {
  const [forecast, setForecast] = useState({
    loaded: false,
  });

  function handleForecastResponse(response) {
    console.log(response.data);
    setForecast({
      loaded: true,
      dailyForecast: response.data.daily,
    });
  }

  if (forecast.loaded) {
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
                  <ForecastDaily data={forecast.dailyForecast[1]} />
                </div>
                <div className="col">
                  <ForecastDaily data={forecast.dailyForecast[2]} />
                </div>
                <div className="col">
                  <ForecastDaily data={forecast.dailyForecast[3]} />
                </div>
                <div className="col">
                  <ForecastDaily data={forecast.dailyForecast[4]} />
                </div>
                <div className="col">
                  <ForecastDaily data={forecast.dailyForecast[5]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let latitude = coordinates.lat;
    let longitude = coordinates.lon;
    let apiKey = "c92de5786a79d17709375c8c4a5c958a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}
