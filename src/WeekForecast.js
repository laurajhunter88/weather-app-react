import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
/*import WeekFormattedDate from "./WeekFormattedDate";*/
import "./WeekForecast.css";
import axios from "axios";

export default function WeekForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="WeekForecast">
        <div className="card forecast-card">
          <div className="card-body-forecast">
            <div className="weather-forecast" id="forecast">
              <div className="row forecast-row">
                <div className="col-2">
                  <div className="day-name">
                    {forecast[0].dt}
                    {/*<WeekFormattedDate date={props.data.date} />*/}
                  </div>
                  <div className="WeekForecastIcon">
                    <WeatherIcon code={forecast[0].weather[0].icon} size={50} />
                  </div>
                  <span className="forecast-temp" id="forecast-temp-max">
                    {Math.round(forecast[0].temp.max)}°C /
                  </span>
                  <span className="forecast-temp" id="forecast-temp-min">
                    {Math.round(forecast[0].temp.min)}°C
                  </span>
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
