import React, { Component } from "react";
import "./css/App.scss";
import MyHeader from "./components/MyHeader";
import AboutMe from "./components/AboutMe";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyHeader />
        <AboutMe />
      </div>
    );
  }
}

export default App;
