import React from "react";
import "./section.styles.scss";

export default function Section(props) {
  return (
    <div className="container section">
      <header className="section__header">
        <h2>Explore destinations</h2>
        <span>View all</span>
      </header>
      <div className="section__content">{props.children}</div>
    </div>
  );
}
