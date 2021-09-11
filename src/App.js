import "./App.css";
import React from "react";
import SearchForm from "./SearchForm";
import Footer from "./Footer";
import TodayForecast from "./TodayForecast";
import WeekForecast from "./WeekForecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="CardBody">
          <h1>Weather Search Engine App</h1>
          <SearchForm />
          <div className="Cards">
            <div className="card inner">
              <TodayForecast defaultCity="London" />
            </div>
            <WeekForecast defaultCity="London" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
