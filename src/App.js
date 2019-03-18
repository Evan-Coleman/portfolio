import { HashRouter } from "react-router-dom";
import React, { Component } from "react";
import "./css/App.scss";
import Routes from "./Routes";
import MyFooter from "./components/MyFooter";
import MyNavBar from "./components/MyNavBar";

class App extends Component {
  render() {
    return (
      <HashRouter forceRefresh>
        <div className="App">
          <div className="WIP">** THIS IS A WORK IN PROGRESS **</div>
          <MyNavBar />
          <Routes />
          <MyFooter />
        </div>
      </HashRouter>
    );
  }
}

export default App;
