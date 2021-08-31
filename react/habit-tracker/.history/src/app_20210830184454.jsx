import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
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
