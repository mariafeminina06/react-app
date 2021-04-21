import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <h1>World Weather Update</h1>
      <h2>
        wherever you go, whatever the weather,
        <br />
        always bring your own sunshine
      </h2>
      <div className="box"></div>
    </div>
  );
}
