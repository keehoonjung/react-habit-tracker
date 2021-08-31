import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";

class App extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <>
        <nav className="header">
          <i className="fas fa-leaf"></i>
          <span className="header-title">Habit Tracker</span>
          <span className="header-count">8</span>
        </nav>
        <div className="input-container">
          <input type="text" className="input" />
          <button className="habit-input">Add</button>
        </div>
        <Habits />
        <button className="reset-button">Reset All</button>
      </>
    );
  }
}

export default App;
