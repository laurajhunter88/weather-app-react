import React from "react";
import WeatherIcon from "./WeatherIcon";
/*import WeekFormattedDate from "./WeekFormattedDate";*/

export default function WeekForecastDay(props) {
  return (
    <div className="WeekForecastDay">
      <div className="day-name">
        {props.data.dt}
        {/*<WeekFormattedDate date={props.data.date} />*/}
      </div>
      <div className="WeekForecastIcon">
        <WeatherIcon code={props.data.weather[0].icon} size={50} />
      </div>
      <span className="forecast-temp" id="forecast-temp-max">
        {Math.round(props.data.temp.max)}°C /
      </span>
      <span className="forecast-temp" id="forecast-temp-min">
        {Math.round(props.data.temp.min)}°C
      </span>
    </div>
  );
}
