import React, { useState } from "react";
import axios from "axios";
import "./TodayForecast.css";

export default function TodayForecast(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 07:00",
      description: response.data.weather[0].description,
      iconUrl: "",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="TodayForecast">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <h2 className="card-title" id="city-name">
                {weatherData.city}
              </h2>
            </div>
            <div className="col-6">
              <h3 className="today-date" id="current-date">
                Last updated: {weatherData.date}
              </h3>
              <h4 id="current-description">{weatherData.description}</h4>
              <div className="float-left">
                <span className="temp" id="current-temp">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units">
                  <span
                    href="#"
                    className="temperature active"
                    id="celsius-link"
                  >
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
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                id="weather-icon"
              />
              <ul className="weather-info">
                <li id="current-humidity">Humidity: {weatherData.humidity}%</li>
                <li id="current-wind">
                  Wind Speed: {Math.round(weatherData.wind)} m/s
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0b02db9e81bd4747b05a8fe268d2b9a4";
    let units = "&units=metric";
    let city = "props.defaultCity";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
