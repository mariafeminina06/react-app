import React, { useState } from "react";
import axios from "axios";
import LocalDate from "./LocalDate";
import CurrentWeatherReport from "./CurrentWeatherReport";
import Forecast from "./Forecast";

import "./Search.css";

export default function GetData() {
  const [city, setCity] = useState("Tokyo");
  const [currentWeatherData, setCurrentWeatherData] = useState({
    loaded: false,
  });

  let apiKey = "c92de5786a79d17709375c8c4a5c958a";

  function getNavigation() {
    navigator.geolocation.getCurrentPosition(getLocation);
  }

  function getLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateQuery(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
    setCurrentWeatherData({
      loaded: true,
      cityDisplay: response.data.name,
      country: response.data.sys.country,
      weatherDescription: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      temperature: response.data.main,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      timezone: response.data.timezone * 1000,
      coordinates: response.data.coord,
    });
  }

  let searchform = (
    <div className="Search">
      <div className="search-engine">
        <div className="card main-section">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search a city"
                      autoComplete="off"
                      onChange={updateQuery}
                    />
                  </div>
                </div>
                <div className="col-2">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={getNavigation}
                  >
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

  if (currentWeatherData.loaded) {
    return (
      <div>
        {searchform}
        <CurrentWeatherReport data={currentWeatherData} />
        <Forecast coordinates={currentWeatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
