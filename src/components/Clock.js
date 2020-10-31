import React, { Component, useState } from "react";
import "../styles/App.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }
  count() {
    this.setState({ time: new Date() });
  }
  componentDidMount() {
    this.intervalId = setInterval(() => this.count(), 1000);
  }
  componentWillMount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.time}</h3>
      </div>
    );
  }
}

export default Clock;
