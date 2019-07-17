import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => {
  return (
    <nav>
      <NavLink to='/menu' activeClassName="active" className="the-pies">
        <span>The Pies</span>
      </NavLink>
      <NavLink to="/find-us" activeClassName="active" className="track-us-down">
        <span>Find Our Truck</span>
      </NavLink>
      <NavLink to='/contact' activeClassName="active" className="contact-us">
        <span>Contact Us</span>
      </NavLink>
    </nav>
  );
}

export default Nav;