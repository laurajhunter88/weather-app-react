import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <span>Open Source Code on </span>
        <a
          id="repository-link"
          target="blank"
          href="https://github.com/laurajhunter88/weather-app-react"
        >
          GitHub
        </a>
        <span>, hosted on </span>
        <a
          id="repository-link"
          target="blank"
          href="https://jolly-poincare-1752f4.netlify.app/"
        >
          Netlify,
        </a>
        <span> created by </span>
        <a
          id="repository-link"
          target="blank"
          href="https://heuristic-keller-8e09f9.netlify.app"
        >
          Laura Hunter
        </a>
      </footer>
    </div>
  );
}
