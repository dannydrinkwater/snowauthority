import React from "react";
import "./hero-search.styles.scss";

import { BiMap, BiCalendar, BiGroup } from "react-icons/bi";

export default function HeroSearch() {
  return (
    <div className="hero">
      <img
        className="hero__background"
        src="https://farm66.staticflickr.com/65535/50611879577_0d9b97d62e_b.jpg"
      />
      <div className="search">
        <h2>The Authority on the Snow</h2>
        <p>
          Compare thousands of prices from the best resorts across the world
        </p>
        <form className="search__form">
          <div className="search__form-field">
            <BiMap />
            <input
              className="search__form-input"
              type="text"
              placeholder='Try "Les Arcs" or "Levi"'
            />
          </div>
          <div className="search__form-field">
            <BiCalendar />
            <input
              className="search__form-input"
              type="text"
              placeholder="Select your dates"
            />
          </div>
          <div className="search__form-field">
            <BiGroup />
            <input
              className="search__form-input"
              type="text"
              placeholder="Guests"
            />
          </div>
          <button className="search__form-submit">Search</button>
        </form>
      </div>
    </div>
  );
}
