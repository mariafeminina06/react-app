import React from "react";

import CurrentWeatherReport from "./CurrentWeatherReport";
import Forecast from "./Forecast";

import "./Main.css";

export default function Main() {
  return (
    <div className="Main">
      <CurrentWeatherReport />
      <Forecast />
    </div>
  );
}
