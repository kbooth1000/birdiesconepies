import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import dropDownArrow from "./assets/SVG/drop-down-arrow.svg";
import "./nav.css";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      canvasWidth: 0,
      navbarIsActive: false
    };
  }

  makeCurvyBorder = (cvs1, ctx) => {
    // let width = this.state.canvasWidth || '100px';
    let { canvasWidth } = this.state;
    let height = 30;
    cvs1.width = canvasWidth;
    cvs1.height = height;

    ctx.clearRect(0, 0, canvasWidth, height);
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.moveTo(0, height / 2);

    for (let x = 0, amplitude = 10; x < canvasWidth; x++) {
      let y = Math.sin(((x / amplitude) * Math.PI) / 2) * amplitude;
      ctx.lineTo(x, y + height / 2);
    }

    ctx.lineTo(canvasWidth, height);
    ctx.lineTo(0, height);
    ctx.lineTo(0, height / 2);
    ctx.fill();
  };

  updateCurvyBorder = (cvs1, ctx) => {
    let docWidth1 =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.getElementsByTagName("body")[0].clientWidth;
    this.setState({
      canvasWidth: docWidth1
    });
    this.makeCurvyBorder(cvs1, ctx);
  };

  componentDidMount() {
    console.log('nav route');
    let borderCanvases = document.querySelectorAll("canvas.wavy-border");
    borderCanvases.forEach(cvsEl => {
      let ctx = cvsEl.getContext("2d");
      let docWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth;
      if (this.state.canvasWidth !== docWidth) {
        // this.makeCurvyBorder(cvsEl, ctx);
        this.setState({ canvasWidth: docWidth });
      this.updateCurvyBorder(cvsEl, ctx);
      }

      window.addEventListener("resize", () =>
        this.updateCurvyBorder(cvsEl, ctx)
      );
      this.unlisten = this.props.history.listen((location, action) => {
        console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
        console.log(`The last navigation action was ${action}`)
        this.updateCurvyBorder(cvsEl, ctx);
      });
      window.addEventListener("load", () => this.updateCurvyBorder(cvsEl, ctx));
    });
  }

  componentWillUnmount() {
    let cvs = document.querySelector("canvas");
    let ctx = cvs.getContext("2d");
    window.removeEventListener("resize", () =>
      this.updateCurvyBorder(cvs, ctx)
    );
    window.removeEventListener("load", () =>
      this.updateCurvyBorder(cvs, ctx)
    );
    this.setState({
      canvasWidth: 0
    })
    this.unlisten();
  }

  makeNavbarActive = () => {
    this.setState({
      navbarIsActive: !this.state.navbarIsActive
    });
  };
  render() {
    return (
      <div className={`navbar ${this.state.navbarIsActive ? "active" : ""}`}
      
      >
        <canvas id="navBorderTop" className="wavy-border nav-border-top">
          ~~~~~~
        </canvas>

        <div className="menu-icon" onClick={()=>this.makeNavbarActive()}></div>
        <nav>
          <NavLink to="/about" activeClassName="active" className="about-us">
            <span>About Us</span>
          </NavLink>

          <NavLink to="/menu" activeClassName="active" className="menu">
            <span>Menu</span>
          </NavLink>

          <NavLink to="/find-us" activeClassName="active" className="find-us">
            <span>Schedule</span>
          </NavLink>

          <NavLink to="/catering" activeClassName="active" className="catering">
            <span>Catering</span>
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="active"
            className="contact-us"
          >
            <span>Contact</span>
          </NavLink>
        </nav>
        {/* <canvas id="navBorderBottom" className="wavy-border nav-border-bottom"> 
          ~~~~~~
        </canvas>*/}
      </div>
    );
  }
}

export default withRouter(Nav);
