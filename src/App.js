import { BrowserRouter } from "react-router-dom";
import React, { Component } from "react";
import "./css/App.scss";
import Routes from "./Routes";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";

class App extends Component {
  render() {
    return (
      <BrowserRouter forceRefresh>
        <div className="App">
          <div className="WIP">** THIS IS A WORK IN PROGRESS **</div>
          <MyHeader />
          <Routes />
          <MyFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
