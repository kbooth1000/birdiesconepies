import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Nav from "./Nav";
import HomeContent from "./HomeContent";
import About from "./About";
import Footer from "./Footer";
import Menu from "./Menu";
import FindUs from "./FindUs";
import Catering from "./Catering";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Map from "./Map";
import UnderConstructionPage from "./UnderConstructionPage";

import "./App.css";

class App extends Component {
  state = {
    currentPage: 'home'
  };

  isCurrentPage = page => this.state.currentPage === page;

  setPage = pageName => {
    console.log('setPage', pageName, this.state.currentPage);
    setTimeout(() =>
      this.setState({
        currentPage: pageName
      }), 1 //ensures this happens after page className changes, enables css transition
    )
  }

  render() {
    return (
      <Router>
        <div className="App">
          {/* <Route
            render={({ location }) =>
              location.pathname !== "/" && location.pathname !== "/login" ? (
                <Header />
              ) : null
            }
          /> */}
          <Header />
          {/* <Route
            render={({ location }) =>
              location.pathname !== "/" ? <Nav /> : null
            }
          /> */}
          {/* <Nav /> */}

          <main>
            <Route path="/" exact component={UnderConstructionPage} />
            <Route path="/under-construction" exact component={HomeContent} />
            <Route path="/menu" exact render={() => <Menu isCurrentPage={() => this.isCurrentPage('menu')} setPage={page => this.setPage(page)} />} />
            <Route path="/about" exact render={() => <About isCurrentPage={() => this.isCurrentPage('about')} setPage={page => this.setPage(page)} />} />
            <Route path="/find-us" exact render={() => <FindUs isCurrentPage={() => this.isCurrentPage('schedule')} setPage={page => this.setPage(page)} />} />
            <Route path="/catering" exact render={() => <Catering isCurrentPage={() => this.isCurrentPage('catering')} setPage={page => this.setPage(page)} />} />
            <Route path="/contact" exact render={() => <Contact isCurrentPage={() => this.isCurrentPage('contact')} setPage={page => this.setPage(page)} />} />
            <Route path="/gallery" exact render={() => <Gallery isCurrentPage={() => this.isCurrentPage('contact')} setPage={page => this.setPage(page)} />} />
            <Route path="/map" exact component={Map} />

          </main>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
