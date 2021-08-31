import React, { Component } from "react";

class Habit extends Component {
  render() {
    return (
      <>
        <span className="habit-name">Reading</span>
        <span className="habit-count">8</span>
        <button className="habit-button">
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button">
          <i classNmae="fas fa-minus-square"></i>
        </button>
        <button className="habit-button">
          <i classNmae="fas fa-trash"></i>
        </button>
      </>
    );
  }
}

export default Habit;
