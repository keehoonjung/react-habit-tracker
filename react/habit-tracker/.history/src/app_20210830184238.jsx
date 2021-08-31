import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <>
        <Navbar />
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
