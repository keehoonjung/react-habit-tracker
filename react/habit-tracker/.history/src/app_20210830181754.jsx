import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";

class App extends Component {
  state = {
    count: 0,
  };
  render() {
    return <Habits />;
  }
}

export default App;
