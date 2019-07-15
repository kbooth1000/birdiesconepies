import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./Header";
import Nav from "./Nav";
import HomeContent from "./HomeContent";
import Footer from "./Footer";
import Menu from './Menu';
import FindUs from './FindUs';
import Contact from './Contact';

import "./App.css";

class App extends Component {
  state = {
    page: 'home'
  }

  render() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />

        <main>
          <Route path="/" exact component={HomeContent} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/find-us" exact component={FindUs} />
          <Route path="/contact" exact component={Contact} />
        </main>

        <Footer />
      </div>
    </Router>
  );
  }
}

export default App;
