import React from "react";
import "./TodayForecast.css";

export default function TodayForecast() {
  return (
    <div className="TodayForecast">
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <h2 className="card-title" id="city-name">
              London
            </h2>
          </div>
          <div className="col-6">
            <h3 className="today-date" id="current-date">
              Last updated: Saturday 18:40
            </h3>
            <h4 id="current-description">broken clouds</h4>
            <div>
              <span className="temp" id="current-temp">
                18
              </span>
              <span className="units">
                <a href="#" className="temperature active" id="celsius-link">
                  °C
                </a>
                |
                <a href="#" className="temperature" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </div>
          </div>

          <div className="col-6">
            <img src="" alt="" id="weather-icon" />
            <ul className="weather-info">
              <li id="current-humidity">Humidity: 81%</li>
              <li id="current-wind">Wind Speed: 0 m/s</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
