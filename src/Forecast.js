import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Forecast.css";
import ForecastDaily from "./ForecastDaily";

export default function Forecast({ coordinates }) {
  const [forecast, setForecast] = useState({
    loaded: false,
  });

  useEffect(() => {
    setForecast({ loaded: false });
  }, [coordinates]);

  function handleForecastResponse(response) {
    console.log(response.data);
    setForecast({
      loaded: true,
      dailyForecastData: response.data.daily,
    });
  }

  if (forecast.loaded) {
    let dailyForecast = forecast.dailyForecastData;
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
                {dailyForecast.map(function (dailyForecast, index) {
                  if (index > 0 && index < 6) {
                    return (
                      <div className="col" key={index}>
                        <ForecastDaily data={dailyForecast} />
                      </div>
                    );
                  }
                })}
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
