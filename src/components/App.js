import React, { Component, useState } from "react";
import "../styles/App.css";
import Clock from "./Clock";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
      </div>
    );
  }
}

export default App;
