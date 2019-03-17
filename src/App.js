import { HashRouter } from "react-router-dom";
import React, { Component } from "react";
import "./css/App.scss";
import Routes from "./Routes";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";

class App extends Component {
  render() {
    return (
      <HashRouter forceRefresh>
        <div className="App">
          <div className="WIP">** THIS IS A WORK IN PROGRESS **</div>
          <MyHeader />
          <Routes />
          <MyFooter />
        </div>
      </HashRouter>
    );
  }
}

export default App;
