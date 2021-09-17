import React, { useState } from "react";
import axios from "axios";
import "./SearchForm.css";
import TodayForecast from "./TodayForecast";
import WeekForecast from "./WeekForecast";

export default function SearchForm(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      coordinates: response.data.coord,
    });
  }

  function search() {
    const apiKey = "0b02db9e81bd4747b05a8fe268d2b9a4";
    let units = "&units=metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="SearchForm">
        <div className="container search">
          <form onSubmit={handleSubmit} className="search" id="search-form">
            <input
              className="bar"
              id="search-bar"
              type="search"
              placeholder="Enter City here..."
              autoFocus="on"
              autoComplete="off"
              onChange={updateCity}
            />
            <input
              className="button mx-2"
              id="button"
              type="submit"
              value="Search"
            />

            <input
              className="current-button"
              id="current-button"
              type="submit"
              value="Current Location"
            />
          </form>
        </div>
        <div className="Cards">
          <div className="todayCard">
            <TodayForecast data={weatherData} />
          </div>
          <div className="weekCard">
            <WeekForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
