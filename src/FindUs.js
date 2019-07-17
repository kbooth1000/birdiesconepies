import React from "react";

import './assets/trailer-silo.png';
import "./findUs.css";

export default function FindUs() {
  return (
    <div className="page find-us">
      <h2>Where we'll be:</h2>
      <div className="schedule">
        <div className="schedule-wrapper">
          <section className="row">
            <div className="bullet-truck" />
            <div className="location">Where:</div>
            <div className="time">When:</div>
          </section>
          <section className="row">
            <div className="bullet-truck" />
            <div className="location">25th Street and Washington Blvd</div>
            <div className="time">Friday, July 19, 2019</div>
          </section>
          <section className="row">
            <div className="bullet-truck" />
            <div className="location">25th Street and Washington Blvd</div>
            <div className="time">Friday, July 19, 2019</div>
          </section>
          <section className="row">
            <div className="bullet-truck" />
            <div className="location">25th Street and Washington Blvd</div>
            <div className="time">Friday, July 19, 2019</div>
          </section>
          <section className="row">
            <div className="bullet-truck" />
            <div className="location">25th Street and Washington Blvd</div>
            <div className="time">Friday, July 19, 2019</div>
          </section>
        </div>
      </div>
      <h3 />
    </div>
  );
}
