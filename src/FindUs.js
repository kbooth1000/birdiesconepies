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
            <div className="location">LHM Riverdale Chrisler Jeep Dodge</div>
            <div className="time">Saturday, July 20</div>
          </section>
          <section className="row">
            <div className="bullet-truck" />
            <div className="location">Henry Barker Jr Park in Pleasant View</div>
            <div className="time">Monday, July 29</div>
          </section>
          
        </div>
      </div>
      <h3 />
    </div>
  );
}
