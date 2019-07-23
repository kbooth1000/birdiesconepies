import React, { Component } from "react";
import MenuItem from "./MenuItem";

import "./contact.css";

export default class Contact extends Component {
  componentDidMount() {
    if (!this.props.isCurrentPage("contact")) {
      this.props.setPage("contact");
    }
  }
  componentWillUnmount() {
    this.props.setPage("non");
  }
  render() {
    return (
      <div
        className={`page contact ${
          this.props.isCurrentPage("contact") ? "current" : "not-current"
        }`}
      >
        <h2>Contact Us</h2>
        <p>Get in touch for private events, catering or questions!</p>
        <ul>
          <li>
            <a href="https://facebook.com/birdiesconepies">
              facebook.com/birdiesconepies
            </a>
          </li>
          <li>
            <a href="https://twitter.com/birdiesconepies">
              twitter.com/birdiesconepies
            </a>
          </li>
          <li>
            <a href="mailto:birdiesconepies@gmail.com">
              email: birdiesconepies@gmail.com
            </a>
          </li>
          <li>Owners: Justin and Lacey Booth</li>
          <li>
            Phone:&nbsp;
            <a href="tel:+17706932946">
              (385) 424-1344
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
