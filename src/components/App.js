import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
      })
    };
  }
  count() {
    this.setState({
      time: new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
      })
    });
  }
  componentDidMount() {
    this.intervalId = setInterval(() => this.count(), 1000);
  }
  componentWillMount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div className="App">
        <div className="Clock">
          <h3 id="time">{this.state.time}</h3>
        </div>
      </div>
    );
  }
}

export default App;
