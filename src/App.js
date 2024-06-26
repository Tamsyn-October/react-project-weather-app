import React from "react";
import Weather from "./Weather"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <Weather defaultCity="New York"/>
      <footer>
        This project was coded by {" "}
        <a href="#" target="_blank">Tamsyn October</a>{" "}
        and is {" "}
        <a href="#" target="_blank">open-sourced on Github</a>
      </footer>
      </div>
    </div>
  );
}

