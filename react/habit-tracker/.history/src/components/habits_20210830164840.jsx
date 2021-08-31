import React, { Component } from "react";
import { readConfigFile } from 'typescript';

class Habits extends Component {
  render() {
      state ={
        habits = [
            {name: "Reading", count : 0},
            {name: "Running", count : 0},
            {name: "Coding", count : 0}
        ]
      }
    return <div></div>;
  }
}

export default Habits;
