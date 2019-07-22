import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./Header";
import Nav from "./Nav";
import HomeContent from "./HomeContent";
import Footer from "./Footer";
import Menu from "./Menu";
import FindUs from "./FindUs";
import Contact from "./Contact";
import Map from "./Map";
import TempHomeContent from "./TempHomeContent";

import "./App.css";

class App extends Component {
  state = {
    page: "home"
  };

  render() {
    return (
      <Router>
        <Route path="/" exact component={TempHomeContent} />
        <div className="App">
          <Route
            render={({ location }) =>
              location.pathname !== "/" && location.pathname !== "/login" ? (
                <Header />
              ) : null
            }
          />
          {/* <Header /> */}
          <Route
            render={({ location }) =>
              location.pathname !== "/" ? <Nav /> : null
            }
          />
          {/* <Nav /> */}

          <main>
            <Route path="/under-construction" exact component={HomeContent} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/find-us" exact component={FindUs} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/map" exact component={Map} />

          </main>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
