import React from "react";

import Search from "./Search";
import Forecast from "./Forecast";

import "./Main.css";

export default function Main() {
  return (
    <div className="Main">
      <Search />
      <Forecast />
    </div>
  );
}
