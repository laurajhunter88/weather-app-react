import "./App.css";
import React from "react";
import SearchForm from "./SearchForm";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="CardBody">
          <h1>Weather Search Engine App</h1>
          <SearchForm defaultCity="London" />
        </div>
        <Footer />
      </div>
    </div>
  );
}
