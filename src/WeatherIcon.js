import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  return (
    <ReactAnimatedWeather
      icon="CLEAR-DAY"
      color="black"
      size={100}
      animate={true}
    />
  );
}
