import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeekForecast.css";

export default function WeekForecastDay(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°C`;
  }

  function minTemperature() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°C`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeekForecastDay">
      <div className="day-name">{day()}</div>
      <div className="WeekForecastIcon">
        <WeatherIcon code={props.data.weather[0].icon} size={50} />
      </div>
      <span className="forecast-temp" id="forecast-temp-max">
        {maxTemperature()}
      </span>

      <span className="forecast-temp" id="forecast-temp-min">
        {minTemperature()}
      </span>
    </div>
  );
}
