import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <form className="search" id="search-form">
        <input
          className="bar"
          id="search-bar"
          type="search"
          placeholder="Enter City here..."
          autofocus="on"
          autocomplete="off"
        />
        <input
          className="button mx-2"
          id="button"
          type="submit"
          value="Search"
        />

        <input
          className="current-button"
          id="current-button"
          type="submit"
          value="Current Location"
        />
      </form>
    </div>
  );
}
