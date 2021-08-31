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
        <div className="habit-input">
          <input type="text" className="input" />
        </div>
        <Habits />
      </>
    );
  }
}

export default App;
