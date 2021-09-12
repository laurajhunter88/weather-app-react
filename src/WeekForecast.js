import React from "react";
import WeekWeatherIcon from "./WeekWeatherIcon";
import WeekFormattedDate from "./WeekFormattedDate";
import "./WeekForecast.css";

export default function ForecastForecast(props) {
  return (
    <div className="WeekForecast">
      <div className="card forecast-card">
        <div className="card-body-forecast">
          <div className="weather-forecast" id="forecast">
            <div className="row forecast-row">
              <div className="col-2">
                <div className="day-name">
                  <WeekFormattedDate date={props.data.date} />
                </div>
                <WeekWeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                />
                <span className="forecast-temp" id="forecast-temp-max">
                  °C /
                </span>
                <span className="forecast-temp" id="forecast-temp-min">
                  °C
                </span>
              </div>
              <div className="col-2">
                <div className="day-name">
                  <WeekFormattedDate date={props.data.date} />
                </div>
                <WeekWeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                />
                <span className="forecast-temp" id="forecast-temp-max">
                  °C /
                </span>
                <span className="forecast-temp" id="forecast-temp-min">
                  °C
                </span>
              </div>
              <div className="col-2">
                <div className="day-name">
                  <WeekFormattedDate date={props.data.date} />
                </div>
                <WeekWeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                />
                <span className="forecast-temp" id="forecast-temp-max">
                  °C /
                </span>
                <span className="forecast-temp" id="forecast-temp-min">
                  °C
                </span>
              </div>
              <div className="col-2">
                <div className="day-name">
                  <WeekFormattedDate date={props.data.date} />
                </div>
                <WeekWeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                />
                <span className="forecast-temp" id="forecast-temp-max">
                  °C /
                </span>
                <span className="forecast-temp" id="forecast-temp-min">
                  °C
                </span>
              </div>
              <div className="col-2">
                <div className="day-name">
                  <WeekFormattedDate date={props.data.date} />
                </div>
                <WeekWeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                />
                <span className="forecast-temp" id="forecast-temp-max">
                  °C /
                </span>
                <span className="forecast-temp" id="forecast-temp-min">
                  °C
                </span>
              </div>
              <div className="col-2">
                <div className="day-name">
                  <WeekFormattedDate date={props.data.date} />
                </div>
                <WeekWeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                />
                <span className="forecast-temp" id="forecast-temp-max">
                  °C /
                </span>
                <span className="forecast-temp" id="forecast-temp-min">
                  °C
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
