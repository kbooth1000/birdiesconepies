import React, { Component } from "react";

import "./catering.css";

export default class Catering extends Component {
  componentDidMount() {
    if (!this.props.isCurrentPage("catering")) {
      this.props.setPage("catering");
    }
  }
  componentWillUnmount() {
    this.props.setPage("non");
  }
  render() {
    return (
      <div
        className={`page catering ${
          this.props.isCurrentPage("catering") ? "current" : "not-current"
        }`}
      >
        <h2>Catering</h2>
        <p>Weddings, Special Events and Catering all COMING SOON!</p>
      </div>
    );
  }
}
