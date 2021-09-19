import React, { useState } from "react";

import "./WeekForecast.css";
import axios from "axios";
import WeekForecastDay from "./WeekForecastDay";

export default function WeekForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeekForecast">
        <div className="card forecast-card">
          <div className="card-body-forecast">
            <div className="weather-forecast" id="forecast">
              <div className="row forecast-row">
                <div className="col-2">
                  <WeekForecastDay data={forecast[0]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "0b02db9e81bd4747b05a8fe268d2b9a4";
    let unit = "&units=metric";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}${unit}`;

    axios.get(apiUrl).then(displayForecast);
  }
}
