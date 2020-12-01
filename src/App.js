import React from "react";
import "./style.scss";

import Header from "./components/header/header.component";
import HeroSearch from "./components/hero-search/hero-search.component";
import Section from "./components/section/section.component";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <HeroSearch />
        <Section>
          <div className="row">
            <div className="col col--1-3">
              <div className="card">
                <img
                  src="https://www.outsideonline.com/sites/default/files/styles/img_600x600/public/migrated-images_parent/migrated-images_79/ski-or-snowboard-fitness_s.jpg?itok=8T2MlQQT"
                  alt=""
                />
              </div>
            </div>
            <div className="col col--1-3">
              <div className="card">
                <img
                  src="https://www.outsideonline.com/sites/default/files/styles/img_600x600/public/migrated-images_parent/migrated-images_79/ski-or-snowboard-fitness_s.jpg?itok=8T2MlQQT"
                  alt=""
                />
              </div>
            </div>
            <div className="col col--1-3">
              <div className="card">
                <img
                  src="https://www.outsideonline.com/sites/default/files/styles/img_600x600/public/migrated-images_parent/migrated-images_79/ski-or-snowboard-fitness_s.jpg?itok=8T2MlQQT"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Section>
      </main>
      <footer />
    </div>
  );
}
