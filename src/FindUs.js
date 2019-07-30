import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./assets/trailer-silo.png";
import "./findUs.css";

export default class FindUs extends Component {
  componentDidMount() {
    this.props.setPage("schedule");
  }
  componentWillUnmount() {
    this.props.setPage("non");
  }

  events = [
    {
      date: "When:",
      time: "",
      location: "Where:",
      name: "Event:"
    },
    {
      date: "August 5th",
      time: "5-9 pm",
      location: "320 West Elberta Drive",
      name: "Pleasant View City Food Truck Giddy Up"
    }
    // ,
    // {
    //   date: "August 17th",
    //   time: "12-8 pm",
    //   location: "950 W Riverdale Road",
    //   name: "Ken Garff Honda (customer appreciation)"
    // }
  ];

  render() {
    console.log(this.props);

    let eventRows = this.events.map(event => (
      <section className="row">
        <div className="bullet-truck" />
        <div className="event-name">{event.name}</div>
        <div className="location">
          {event.location}
          {/* <Link to="/map">Map</Link> */}
        </div>
        <div className="date-time">
          <div className="date">{event.date}</div>
          <div className="time">{event.time}</div>
        </div>
      </section>
    ));

    return (
      <div
        className={`page find-us ${
          this.props.isCurrentPage("schedule") ? "current" : "not-current"
        }`}
      >
        <h2>Where we'll be:</h2>
        <div className="schedule">
          <div className="schedule-wrapper">
           
            {eventRows}
          </div>
        </div>
        <h3 />
      </div>
    );
  }
}
