import React, { Component } from "react";

import raspberryPie from "./assets/hand-holding-raspberry-pie.png";
import "./about.css";

export default class About extends Component {
  componentDidMount() {
    if (!this.props.isCurrentPage("about")) {
      this.props.setPage("about");
    }
  }
  componentWillUnmount() {
    this.props.setPage("non");
  }
  render() {
    return (
      <div
        className={`page about ${
          this.props.isCurrentPage("about") ? "current" : "not-current"
        }`}
      >
        <h2>About Us</h2>
        <img
          src={raspberryPie}
          alt="hand holding raspberry cone pie"
          className="left-side-pic"
        />
        <div className="inner-content" style={{
                maxWidth: '900px',
                width: '84%',
                margin: 'auto'
        }}>
          <p>
            <span className="birdie-type">Birdie’s Cone Pies</span> are
            “grandma’s” delicious pie crusts in a cone shape ready to eat on the
            go.
          </p>

          <p>
            Our pies can be filled with our signature cheesecake, sweet or tangy
            cream and your choice of fruits, chocolate, caramel, peanut
            butter... and so much more. Create your own combination.
          </p>
          <p>
            Also look for our fresh fruit pies on our "Bird of the Day" menu.
            Homemade apple pie, mixed berry "Dodo" pie, peach cobblers, ... you
            get the idea.
          </p>
          <p>
            And for "Little Larks," come build-a-nest with your favorite
            flavored cream, delicious mix-ins, sprinkled pie crust, and topped
            with a "birdie." Lots to love.
          </p>
          <p>
            <strong>Coming Summer 2019!</strong>
          </p>
        </div>
        <div style={{ clear: "both", height: "4rem" }} />
      </div>
    );
  }
}
