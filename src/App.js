import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
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
        <div className="App">
          <Header />
          <main>
            <UnderConstructionPage />
          </main>
          <Footer />
        </div>
    );
  }
}

export default App;
