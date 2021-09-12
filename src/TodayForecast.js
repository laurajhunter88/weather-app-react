import React from "react";
import TodayWeatherIcon from "./TodayWeatherIcon";
import TodayFormattedDate from "./TodayFormattedDate";
import "./TodayForecast.css";

export default function TodayForecast(props) {
  return (
    <div className="TodayForecast">
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <h2 className="card-title" id="city-name">
              {props.data.city}
            </h2>
          </div>
          <div className="col-6">
            <h3 className="today-date" id="current-date">
              <TodayFormattedDate date={props.data.date} />
            </h3>
            <h4 id="current-description">{props.data.description}</h4>
            <div className="float-left">
              <span className="temp" id="current-temp">
                {Math.round(props.data.temperature)}
              </span>
              <span className="units">
                <span href="#" className="temperature active" id="celsius-link">
                  °C
                </span>
                |
                <span href="#" className="temperature" id="fahrenheit-link">
                  °F
                </span>
              </span>
            </div>
          </div>

          <div className="col-6">
            <div id="weather-icon">
              <TodayWeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>
            <ul className="weather-info">
              <li id="current-humidity">Humidity: {props.data.humidity}%</li>
              <li id="current-wind">
                Wind Speed: {Math.round(props.data.wind)} m/s
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
