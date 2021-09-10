import React from "react";
import "./WeekForecast.css";

export default function ForecastForecast() {
  return (
    <div className="WeekForecast">
      <div className="card forecast-card">
        <div className="card-body-forecast">
          <div className="weather-forecast" id="forecast"></div>
        </div>
      </div>
    </div>
  );
}
