import React, { useState, useEffect } from "react";
import "./WeekForecast.css";
import axios from "axios";
import WeekForecastDay from "./WeekForecastDay";

export default function WeekForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "0b02db9e81bd4747b05a8fe268d2b9a4";
    let unit = "&units=metric";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}${unit}`;

    axios.get(apiUrl).then(displayForecast);
  }

  if (loaded) {
    return (
      <div className="WeekForecast">
        <div className="card forecast-card">
          <div className="card-body-forecast">
            <div className="weather-forecast" id="forecast">
              <div className="row forecast-row">
                {forecast.map(function (dailyForecast, index) {
                  if (index >= 1 && index <= 6) {
                    return (
                      <div className="col-2" key={index}>
                        <WeekForecastDay data={dailyForecast} />
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
