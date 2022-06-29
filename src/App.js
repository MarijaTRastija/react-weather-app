import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by Marija Tržić Rastija and is
        <a
          href="https://github.com/MarijaTRastija/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
