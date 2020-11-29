import React from "react";
import "./style.scss";

import Header from "./components/header/header.component";
import HeroSearch from "./components/hero-search/hero-search.component";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroSearch />
        <div className="container">
          <div className="row">
            <div className="col col--1-2">
              <div className="card">Item 1</div>
            </div>
            <div className="col col--1-2">
              <div className="card">Item 2</div>
            </div>
          </div>
          <div className="row">
            <div className="col col--1-3">Item 1</div>
            <div className="col col--1-3">Item 2</div>
            <div className="col col--1-3">Item 3</div>
          </div>
        </div>
      </main>
      <footer />
    </div>
  );
}
