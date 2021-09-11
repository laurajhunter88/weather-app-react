import React from "react";
import "./Cards.css";
import TodayForecast from "./TodayForecast";
import WeekForecast from "./WeekForecast";

export default function Cards() {
  return (
    <div className="Cards">
      <div className="card inner">
        <TodayForecast defaultCity="London" />
      </div>
      <WeekForecast defaultCity="London" />
    </div>
  );
}
